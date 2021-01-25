import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GhostTodoItemCompComponent } from "./ghost-todo-item-comp.component";

@NgModule({
  declarations: [GhostTodoItemCompComponent],
  imports: [CommonModule],
  exports: [GhostTodoItemCompComponent]
})
export class GhostTodoItemCompModule {}
