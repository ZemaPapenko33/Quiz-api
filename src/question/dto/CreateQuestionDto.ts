import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'Question for quiz',
    example: 'which construction do we use to construct the present perfect?',
  })
  @IsString()
  question: string;
}
