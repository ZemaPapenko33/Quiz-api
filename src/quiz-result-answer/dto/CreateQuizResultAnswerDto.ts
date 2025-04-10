import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateQuizResultAnswerDto {
  @ApiProperty({
    description: 'the Question to which this answer refers',
    example: 'iwiwq98-0jjjsa92-asas',
  })
  @IsString()
  questionId: string;

  @ApiProperty({
    description: 'the user answer to which this question refers',
    example: 'iwiwq98-0jjjsa92-asas',
  })
  @IsString()
  answerId: string;

  @ApiProperty({ description: 'the quiz to which this answer result refers' })
  @IsString()
  quizId: string;
}
