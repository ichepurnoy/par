import { Component, OnInit } from '@angular/core';
import { ToDo } from './app.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    todos: ToDo[];

    ngOnInit(): void {
        this.todos = [
            {
                title: 'Title 1',
                description: 'descr 1',
                completed: false,
            },
            {
                title: 'Title 2',
                description: 'descr 1',
                completed: true,
            },
        ];
    }
}
