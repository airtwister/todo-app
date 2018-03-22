import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoStore {

    todos: Array<Todo>;

    localSt: LocalStorageService;

    constructor() {
        this.localSt = new LocalStorageService();
        this.todos = this.localSt.retrieve('todos') || [];
    }

    _updateStore() {
        this.localSt.store('todos', this.todos);
        console.log(this.localSt.retrieve('todos'));
    }

    add(title: String) {
        this.todos.push(new Todo(title));
        this._updateStore();
    }

    toggleCompletion(uid: String) {
        for (const todo of this.todos) {
            if (todo.uid === uid) {
                todo.completed = !todo.completed;
                break;
            }
        }

        this._updateStore();
    }

    remove(uid: String) {
        for (const todo of this.todos) {
            if (todo.uid === uid) {
                this.todos.splice(this.todos.indexOf(todo), 1);
                break;
            }
        }
        this._updateStore();
    }
}
