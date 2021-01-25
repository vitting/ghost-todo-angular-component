import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TodoItem } from "../interfaces/todo_item.interface";
import { List } from "immutable";

@Injectable({
  providedIn: "root",
})
export class TodoItemsStoreService {
  private store = List<TodoItem>();
  private itemsObs$ = new BehaviorSubject<TodoItem[]>([]);
  constructor() {}

  get items$(): Observable<TodoItem[]> {
    return this.itemsObs$.asObservable();
  }

  setItems(items: TodoItem[]): void {
    this.store = List(items);
    this.itemsObs$.next(this.store.toArray());
  }

  add(item: TodoItem): void {
    this.store = this.store.push(item);
    this.itemsObs$.next(this.store.toArray());
  }

  update(item: TodoItem): void {
    this.store = this.store.map((todo) => {
      return todo.id === item.id ? item : todo;
    });
    this.itemsObs$.next(this.store.toArray());
  }

  remove(item: TodoItem): void {
    this.store = this.store.filter((todo) => todo.id !== item.id);
    this.itemsObs$.next(this.store.toArray());
  }

  public get values(): TodoItem[] {
    return this.store.toArray();
  }

  public get count(): number {
    return this.store.count();
  }
}
