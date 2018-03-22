import { Component, OnInit } from '@angular/core';
import { TodoStore } from '../store.service';
import { Todo } from '../todo';

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

    toggleCompletion(uid: String) {
        this.todoStore.toggleCompletion(uid);
    }

    remove(uid: String) {
        this.todoStore.remove(uid);
    }

    removeCompleted() {
        this.todoStore.removeCompleted();
    }

    editTodo(todo: Todo) {
        todo.editing = true;
    }

    stopEditing(todo: Todo, editedTitle) {
        todo.setTitle(editedTitle.value);
        todo.editing = false;
    }

    cancelEditingTodo(todo: Todo) {
        todo.editing = false;
    }

    updateEditingTodo(editedTitle, todo: Todo) {
        editedTitle = editedTitle.value.trim();
        todo.editing = false;

        if (editedTitle.length === 0) {
            return this.todoStore.remove(todo.uid);
        }

        todo.setTitle(editedTitle);
        this.todoStore.updateStorage();
    }
}
