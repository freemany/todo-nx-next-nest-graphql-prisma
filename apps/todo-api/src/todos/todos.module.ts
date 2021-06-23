import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { TodosRepo } from '../services/todosRepo';
import { PrismaService } from '../services/prismaService';

@Module({
  providers: [TodosResolver, TodosService, TodosRepo, PrismaService],
})
export class TodosModule {}
