import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTodoItemCompComponent } from './ghost-todo-item-comp.component';

describe('GhostTodoItemCompComponent', () => {
  let component: GhostTodoItemCompComponent;
  let fixture: ComponentFixture<GhostTodoItemCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostTodoItemCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTodoItemCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
