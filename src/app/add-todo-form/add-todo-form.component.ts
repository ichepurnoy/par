import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HandleTodoService } from '../handle-todo.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDo } from '../app.model';

@Component({
    selector: 'app-add-todo-form',
    templateUrl: './add-todo-form.component.html',
    styleUrls: ['./add-todo-form.component.scss'],
})
export class AddTodoFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private handleTodos: HandleTodoService, @Inject(MAT_DIALOG_DATA) todo: ToDo) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            id: [this.getNewId()],
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            completed: [false],
        });
    }

    getNewId = (): number => new Date().getTime();

    // addTodo(todo): void {
    //     this.form.reset();
    //     this.handleTodos.addTodo(todo);
    // }
}
