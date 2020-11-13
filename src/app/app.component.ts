import { Component, OnInit } from '@angular/core';
import { ToDo } from './app.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    todos: ToDo[];
    dialogRef: MatDialogRef<AddTodoFormComponent>;

    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
        this.todos = [
            {
                id: 'asfasaf112121212',
                title: 'Title 1',
                description: 'descr 1',
                completed: false,
            },
            {
                id: 'dasads12w111212e',
                title: 'Title 2',
                description: 'descr 2',
                completed: true,
            },
            {
                id: '4545455fffsfsfsf4',
                title: 'Title 3',
                description: 'descr 3',
                completed: false,
            },
            {
                id: 'gbfhe6e4w54wg4g44',
                title: 'Title 4',
                description: 'descr 4',
                completed: false,
            },
            {
                id: 'dfsag3443434t3y35',
                title: 'Title 5',
                description: 'descr 5',
                completed: true,
            },
        ];
    }

    getIncompleteTodos = (todos: ToDo[]): ToDo[] => todos.filter(todo => !todo.completed);

    getCompletedTodos = (todos: ToDo[]): ToDo[] => todos.filter(todo => todo.completed);

    openDialog(): void {
        this.dialogRef = this.dialog.open(AddTodoFormComponent);

        this.dialogRef.afterClosed().subscribe(result => {
            // console.log(`Dialog result:`,  result);
            if (result) {
                this.todos.unshift(result);
            }
        });
    }

    addTodo(todo): void {
        this.todos.unshift(todo);
    }

    deleteTodo(todo): void {
        const indexToDelete = this.todos.findIndex(item => item.id === todo.id);
        this.todos = this.todos.splice(indexToDelete, 1);
    }
}
