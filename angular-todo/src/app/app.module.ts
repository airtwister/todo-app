import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
