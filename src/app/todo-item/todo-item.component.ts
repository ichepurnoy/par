import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../app.model';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
    @Input() data: ToDo;
    @Output() delete: EventEmitter<ToDo> = new EventEmitter<ToDo>();

    constructor() {}

    ngOnInit(): void {}

    deleteTodo(todo: ToDo): void {
        this.delete.emit(todo);
    }
}
