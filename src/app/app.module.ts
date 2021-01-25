import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GhostTodoCompModule } from "./components/ghost-todo-comp/ghost-todo-comp.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GhostTodoCompModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
