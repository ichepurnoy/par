import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ToDo } from '../app.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
    @Input() todos: ToDo[] = [];
    @Input() delete: (todo: ToDo) => {};
    @Input() update: (todo: ToDo) => {};

    constructor() {}

    ngOnInit(): void {}
}
