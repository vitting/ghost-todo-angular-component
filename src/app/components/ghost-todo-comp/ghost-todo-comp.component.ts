import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { TodoItem } from "src/app/interfaces/todo_item.interface";
import { TodoItemsStoreService } from "src/app/store/todo-items-store.service";
import { v4 } from "uuid";

@Component({
  selector: "app-ghost-todo-comp",
  templateUrl: "./ghost-todo-comp.component.html",
  styleUrls: ["./ghost-todo-comp.component.scss"],
})
export class GhostTodoCompComponent implements OnInit, OnDestroy {
  @Input() initTodos = "";
  @Output() todoChange = new EventEmitter<TodoItem[]>();
  private storeSub: Subscription;
  constructor(public store: TodoItemsStoreService) {
    this.storeSub = this.store.items$.subscribe((todos) => {
      this.todoChange.emit(todos);
    });
  }

  ngOnInit(): void {
    if (this.initTodos) {
      const todos = this.initTodos.split(",").map<TodoItem>((item) => {
        return {
          id: v4(),
          title: item.trim(),
          completed: false,
        };
      });

      this.store.setItems(todos);
    }
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  // tslint:disable-next-line: variable-name
  trackByTodo(_index: number, item: TodoItem): string {
    return `${item.id}`;
  }
}
