import { CreateUserInput } from './create.user';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
    @Field(() => Int)
    id: number;
}
