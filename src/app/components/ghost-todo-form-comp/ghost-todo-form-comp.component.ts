import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TodoItem } from "src/app/interfaces/todo_item.interface";
import { v4 } from "uuid";
@Component({
  selector: "app-ghost-todo-form-comp",
  templateUrl: "./ghost-todo-form-comp.component.html",
  styleUrls: ["./ghost-todo-form-comp.component.scss"],
})
export class GhostTodoFormCompComponent implements OnInit {
  @Output() submitTodo = new EventEmitter<TodoItem>();
  public todoInput = "";

  constructor() {}

  ngOnInit(): void {}

  handleSubmit(): void {
    if (this.todoInput) {
      const newTodoItem: TodoItem = {
        id: v4(),
        title: this.todoInput,
        completed: false,
      };

      this.todoInput = "";
      this.submitTodo.emit(newTodoItem);
    }
  }
}
