import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { TodosRepo } from './../services/todosRepo';
import {
  mockTodos,
  mockTodo,
  mockCreateTodoDto,
  mockUpdateTodoDto,
} from './../../test/todos/mockTodo';

describe('TodosService', () => {
  let service: TodosService;
  let repo: TodosRepo;

  beforeEach(async () => {
    const mockTodoRepo = {
      getAll: jest.fn(),
      createTodo: jest.fn(),
      updateTodo: jest.fn(),
      getById: jest.fn(),
      removeTodo: jest.fn(),
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

  it('should findOne by id', async () => {
    const id = 1;
    const getByIdSpy = jest
      .spyOn(repo, 'getById')
      .mockResolvedValueOnce(mockTodo());
    const response = await service.findOne(id);
    expect(response).toEqual(mockTodo());
    expect(getByIdSpy).toHaveBeenCalledWith(id);
  });

  it('should create', async () => {
    const creatSpy = jest
      .spyOn(repo, 'createTodo')
      .mockResolvedValueOnce(mockTodo());
    const response = await service.create(mockCreateTodoDto());
    expect(response).toEqual(mockTodo());
    expect(creatSpy).toHaveBeenCalledWith(mockCreateTodoDto());
  });

  it('should update', async () => {
    const id = 1;
    const updateSpy = jest
      .spyOn(repo, 'updateTodo')
      .mockResolvedValueOnce(mockTodo());
    const response = await service.update(id, mockUpdateTodoDto());
    expect(response).toEqual(mockTodo());
    expect(updateSpy).toHaveBeenCalledWith(id, {
      isComplete: mockUpdateTodoDto().isComplete,
      name: mockUpdateTodoDto().name,
    });
  });

  it('should remove by id', async () => {
    const id = 1;
    const removeSpy = jest
      .spyOn(repo, 'removeTodo')
      .mockResolvedValueOnce(mockTodo());
    const response = await service.remove(id);
    expect(response).toEqual(mockTodo());
    expect(removeSpy).toHaveBeenCalledWith(id);
  });
});
