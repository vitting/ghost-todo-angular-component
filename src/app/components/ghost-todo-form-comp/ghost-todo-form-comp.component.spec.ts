import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTodoFormCompComponent } from './ghost-todo-form-comp.component';

describe('GhostTodoFormCompComponent', () => {
  let component: GhostTodoFormCompComponent;
  let fixture: ComponentFixture<GhostTodoFormCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostTodoFormCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTodoFormCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
