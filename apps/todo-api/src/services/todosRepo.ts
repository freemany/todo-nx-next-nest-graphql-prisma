import { Injectable } from '@nestjs/common';
import { PrismaService } from './prismaService';

interface TodoInterface {
  name: string;
  isComplete: boolean;
}

@Injectable()
export class TodosRepo {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.todo.findMany();
  }

  async getById(id: number) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  async createTodo(todo: TodoInterface) {
    return this.prisma.todo.create({ data: todo });
  }

  async removeTodo(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }

  async updateTodo(id: number, data: TodoInterface) {
    return this.prisma.todo.update({ where: { id }, data });
  }
}
