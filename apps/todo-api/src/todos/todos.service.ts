import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { TodosRepo } from '../services/todosRepo';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(private todosRepo: TodosRepo) {}

  create(
    @Args('createTodoInput') createTodoInput: CreateTodoInput
  ): Promise<Todo> {
    return this.todosRepo.createTodo({
      name: createTodoInput.name,
      isComplete: createTodoInput.isComplete,
    });
  }

  findAll() {
    return this.todosRepo.getAll();
  }

  findOne(id: number) {
    return this.todosRepo.getById(id);
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return this.todosRepo.updateTodo(id, {
      name: updateTodoInput.name,
      isComplete: updateTodoInput.isComplete,
    });
  }

  remove(id: number) {
    return this.todosRepo.removeTodo(id);
  }
}
