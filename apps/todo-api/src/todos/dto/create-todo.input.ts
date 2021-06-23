import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  name: string;
  @Field({ nullable: true })
  isComplete?: boolean;
}
