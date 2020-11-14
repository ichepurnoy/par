import { Component, OnInit } from '@angular/core';
import { ToDo } from './app.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { HandleTodoService } from './handle-todo.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    todos$: Observable<ToDo[]>;
    incompleteTodos$: Observable<ToDo[]>;
    completedTodos$: Observable<ToDo[]>;
    dialogRef: MatDialogRef<AddTodoFormComponent>;

    constructor(private dialog: MatDialog, private handleTodos: HandleTodoService) {}

    ngOnInit(): void {
        this.reloadTodos();
    }

    openDialog(): void {
        this.dialogRef = this.dialog.open(AddTodoFormComponent);

        this.dialogRef.afterClosed().subscribe(todo => {
            // console.log(`Dialog result:`,  result);
            if (todo) {
                this.addTodo(todo);
            }
        });
    }

    addTodo(todo): void {
        this.handleTodos.addTodo(todo);
        this.reloadTodos();
    }

    public deleteTodo(todo: ToDo): void {
        this.handleTodos.deleteTodo(todo);
        this.reloadTodos();
    }

    reloadTodos(): void {
        this.todos$ = this.handleTodos.getTodos();
        this.incompleteTodos$ = this.todos$.pipe(map(todos => todos.filter(todo => !todo.completed)));
        this.completedTodos$ = this.todos$.pipe(map(todos => todos.filter(todo => todo.completed)));
    }
}
