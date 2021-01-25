import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TodoItem } from "src/app/interfaces/todo_item.interface";

@Component({
  selector: "app-ghost-todo-item-comp",
  templateUrl: "./ghost-todo-item-comp.component.html",
  styleUrls: ["./ghost-todo-item-comp.component.scss"],
})
export class GhostTodoItemCompComponent implements OnInit {
  @Input() todo!: TodoItem;
  @Output() clickTodoRemove = new EventEmitter<TodoItem>();
  @Output() changeTodoCompleted = new EventEmitter<TodoItem>();
  constructor() {}

  ngOnInit(): void {}

  handleComplete(e: Event): void {
    if (e) {
      this.todo.completed = (e.target as HTMLInputElement).checked;
      this.changeTodoCompleted.emit(this.todo);
    }
  }

  handleRemoveItem(): void {
    this.clickTodoRemove.emit(this.todo);
  }
}
