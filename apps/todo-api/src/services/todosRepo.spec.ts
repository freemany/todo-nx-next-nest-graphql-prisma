import { Test } from '@nestjs/testing';
import {
  mockUpdateTodoDto,
  mockCreateTodoDto,
  mockTodo,
} from './../../test/todos/mockTodo';
import { Todo } from './../../src/todos/entities/todo.entity';
import { TodosRepo } from './todosRepo';

describe.only('Todos repo', () => {
  //   beforeEach(async () => {
  //     const mockOrmRepo = {
  //       createTodo: jest.fn(),
  //       updateTodo: jest.fn(),
  //       getById: jest.fn(),
  //       removeTodo: jest.fn(),
  //     };

  //     const moduleRef = await Test.createTestingModule({
  //       providers: [TodosRepo, { provide: Todo, useValue: mockOrmRepo }],
  //     }).compile();
  //   });

  it('should pass', () => {
    expect(true).toBeTruthy();
  });
});
