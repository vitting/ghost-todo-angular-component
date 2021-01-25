import { Component, OnInit } from "@angular/core";
import { TodoItem } from "src/app/interfaces/todo_item.interface";
import { v4 } from "uuid";
import { TodoItemsStoreService } from "src/app/store/todo-items-store.service";
@Component({
  selector: "app-ghost-todo-form-comp",
  templateUrl: "./ghost-todo-form-comp.component.html",
  styleUrls: ["./ghost-todo-form-comp.component.scss"],
})
export class GhostTodoFormCompComponent implements OnInit {
  public todoInput = "";

  constructor(private store: TodoItemsStoreService) {}

  ngOnInit(): void {}

  handleSubmit(): void {
    if (this.todoInput) {
      const newTodoItem: TodoItem = {
        id: v4(),
        title: this.todoInput,
        completed: false,
      };

      this.todoInput = "";
      this.store.add(newTodoItem);
    }
  }
}
