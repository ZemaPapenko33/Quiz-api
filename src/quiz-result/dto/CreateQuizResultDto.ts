import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateQuizResultDto {
  @ApiProperty({ description: 'Total score', example: '7' })
  @IsInt()
  totalScore: number;

  @ApiProperty({ description: 'Total questions', example: '10' })
  @IsInt()
  totalQuestions: number;

  @ApiProperty({ description: 'the quiz to which this answer result refers' })
  @IsString()
  quizId: string;
}
