import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field()
  id: number;
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  isComplete?: false;
}
