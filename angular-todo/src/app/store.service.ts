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

}
