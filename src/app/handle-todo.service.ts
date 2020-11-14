import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo } from './app.model';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class HandleTodoService {
    constructor(private http: HttpClient) {}

    getLocalTodos(): ToDo[] {
        return JSON.parse(localStorage.getItem('todos'));
    }

    setLocalTodos(todos: ToDo[]): void {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    getTodos(): Observable<ToDo[]> {
        const localTodos = this.getLocalTodos();
        const localTodos$ = of(localTodos);
        const remoteTodos$ = this.http.get<ToDo[]>('assets/mockTodos.json');
        const source = localTodos && localTodos.length ? localTodos$ : remoteTodos$;
        return source.pipe(
            map(response => {
                // console.log(response);
                return response;
            }),
            tap(res => {
                this.setLocalTodos(res);
                return res;
            }),
            shareReplay(),
        );
    }

    addTodo(todo): void {
        localStorage.setItem('todos', JSON.stringify([todo, ...JSON.parse(localStorage.getItem('todos'))]));
    }

    /* Since logic for Delete and Update only differs in 'slice()',  this unified method was created */
    updateOrDeleteTodo(todo, type: 'update' | 'delete'): void {
        const localTodos = this.getLocalTodos();
        const index = localTodos.findIndex(item => item.id === todo.id);
        if (type === 'update') {
            localTodos.splice(index, 1, todo);
        }
        if (type === 'delete') {
            localTodos.splice(index, 1);
        }
        this.setLocalTodos(localTodos);
    }
}
