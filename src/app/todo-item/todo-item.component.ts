import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../app.model';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
    @Input() data: ToDo;

    constructor() {}

    ngOnInit(): void {}
}
