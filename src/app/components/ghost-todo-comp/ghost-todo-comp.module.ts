import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhostTodoCompComponent } from './ghost-todo-comp.component';
import { GhostTodoFormCompModule } from '../ghost-todo-form-comp/ghost-todo-form-comp.module';
import { GhostTodoItemCompModule } from '../ghost-todo-item-comp/ghost-todo-item-comp.module';



@NgModule({
  declarations: [GhostTodoCompComponent],
  imports: [
    CommonModule,
    GhostTodoFormCompModule,
    GhostTodoItemCompModule
  ],
  exports: [GhostTodoCompComponent]
})
export class GhostTodoCompModule { }
