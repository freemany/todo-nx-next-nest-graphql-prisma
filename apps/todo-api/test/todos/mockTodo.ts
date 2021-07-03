import { CreateTodoInput } from 'apps/todo-api/src/todos/dto/create-todo.input';
import { UpdateTodoInput } from 'apps/todo-api/src/todos/dto/update-todo.input';
import { Todo } from 'apps/todo-api/src/todos/entities/todo.entity';

export const mockCreateTodoDto = (): CreateTodoInput => ({
  name: 'test_name',
  isComplete: true,
});

export const mockUpdateTodoDto = (): UpdateTodoInput => ({
  id: 1,
  name: 'test_name',
  isComplete: true,
});

export const mockTodo = (): Todo => ({
  id: 1,
  name: 'test_name',
  isComplete: true,
});

export const mockTodos = (): Todo[] => [
  {
    id: 1,
    name: 'test_name1',
    isComplete: true,
  },
  {
    id: 2,
    name: 'test_name2',
    isComplete: false,
  },
];
