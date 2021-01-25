import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GhostTodoFormCompComponent } from "./ghost-todo-form-comp.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [GhostTodoFormCompComponent],
  imports: [CommonModule, FormsModule],
  exports: [GhostTodoFormCompComponent]
})
export class GhostTodoFormCompModule {}
