import { v4 as uuid } from 'uuid';

export class Todo {
    completed: Boolean;
    editing: Boolean;
    title: String;
    uid: String;
    constructor(title: String) {
        this.uid = uuid();
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }
    setTitle(title: String) {
        this.title = title.trim();
    }
}
