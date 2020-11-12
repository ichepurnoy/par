import {Component, Input, OnInit} from '@angular/core';

export interface ToDo {
    title: string;
    description: string;
    completed: boolean;
}

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    @Input() todos: ToDo[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
