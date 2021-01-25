import { Component, Input, OnInit } from "@angular/core";
import { TodoItem } from "src/app/interfaces/todo_item.interface";
import { TodoItemsStoreService } from "src/app/store/todo-items-store.service";

@Component({
  selector: "app-ghost-todo-item-comp",
  templateUrl: "./ghost-todo-item-comp.component.html",
  styleUrls: ["./ghost-todo-item-comp.component.scss"],
})
export class GhostTodoItemCompComponent implements OnInit {
  @Input() todo!: TodoItem;
  constructor(private store: TodoItemsStoreService) {}

  ngOnInit(): void {}

  handleComplete(e: Event): void {
    if (e) {
      this.todo.completed = (e.target as HTMLInputElement).checked;
      this.store.update(this.todo);
    }
  }

  handleRemoveItem(): void {
    this.store.remove(this.todo);
  }
}
