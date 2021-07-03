import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { TodosRepo } from './../services/todosRepo';
import {
  mockTodos,
  mockTodo,
  mockCreateTodoDto,
  mockUpdateTodoDto,
} from './../../test/todos/mockTodo';
import { CreateTodoInput } from './dto/create-todo.input';

describe('TodosService', () => {
  let service: TodosService;
  let repo: TodosRepo;

  beforeEach(async () => {
    const mockTodoRepo = {
      getAll: jest.fn(),
      createTodo: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService, { provide: TodosRepo, useValue: mockTodoRepo }],
    }).compile();

    service = module.get<TodosService>(TodosService);
    repo = module.get<TodosRepo>(TodosRepo);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should findAll', async () => {
    jest.spyOn(repo, 'getAll').mockResolvedValueOnce(mockTodos());
    const response = await service.findAll();
    expect(response).toEqual(mockTodos());
  });

  it('should create', async () => {
    const creatSpy = jest
      .spyOn(repo, 'createTodo')
      .mockResolvedValueOnce(mockTodo());
    const response = await service.create(mockCreateTodoDto());
    expect(response).toEqual(mockTodo());
    expect(creatSpy).toHaveBeenCalledWith(mockCreateTodoDto());
  });
});
