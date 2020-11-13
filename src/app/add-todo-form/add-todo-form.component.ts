import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-todo-form',
    templateUrl: './add-todo-form.component.html',
    styleUrls: ['./add-todo-form.component.scss'],
})
export class AddTodoFormComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            id: [{ value: 'svscsdsdvsas1e12etest', disabled: true }],
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            completed: [false],
        });
    }

    addTodo(): void {
        // console.log(this.form.value);
        // this.form.reset();
    }
}
