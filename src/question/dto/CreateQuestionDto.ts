import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'Question for quiz',
    example: 'which construction do we use to construct the present perfect?',
  })
  @IsString()
  question: string;

  @ApiProperty({
    description: 'the quiz to which this question refers',
    example: '21890821-njksd-1jhh2h3gh',
  })
  @IsString()
  quizId: string;
}
