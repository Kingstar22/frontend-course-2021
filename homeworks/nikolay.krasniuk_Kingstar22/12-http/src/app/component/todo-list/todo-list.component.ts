import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import { ITodo} from '../../app.interface';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
    editItem = false;
    text = '';
    @Input() todo!:ITodo
    @Output() clickBtn = new EventEmitter();
    @Output() changeTodo = new EventEmitter();
    @Output() editTodoItem = new EventEmitter();

    ngOnInit() {
        this.text = this.todo.text;
    }

    getId(id: string) {
        this.clickBtn.emit(id);
    }

    onChange(event: MouseEvent, todo: ITodo) {
        event.preventDefault()
        this.changeTodo.emit(todo);
    }

    clickEdit() {
        this.editItem = !this.editItem;
    }

    getEditItem() {
        if(this.text) {
            this.editTodoItem.emit( this.text);
            this.clickEdit();
        }
    }
}
