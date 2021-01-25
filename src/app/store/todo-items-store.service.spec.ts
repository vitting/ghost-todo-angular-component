import { TestBed } from '@angular/core/testing';

import { TodoItemsStoreService } from './todo-items-store.service';

describe('TodoItemsStoreService', () => {
  let service: TodoItemsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoItemsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
