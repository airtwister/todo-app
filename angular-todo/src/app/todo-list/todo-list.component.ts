import { Component, OnInit } from '@angular/core';
import { TodoStore } from '../store.service';

const ENTER_KEY = 13;

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

    title = 'todos';

    todoStore: TodoStore;

    constructor() {
        this.todoStore = new TodoStore();
    }

    ngOnInit() {
    }

    addTodo($event, newtodo) {
        if ($event.which === ENTER_KEY && newtodo.value.trim().length) {
            this.todoStore.add(newtodo.value);
            newtodo.value = '';
        }
    }

}
