import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTodoCompComponent } from './ghost-todo-comp.component';

describe('GhostTodoCompComponent', () => {
  let component: GhostTodoCompComponent;
  let fixture: ComponentFixture<GhostTodoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostTodoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTodoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
