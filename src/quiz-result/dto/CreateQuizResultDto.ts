import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateQuizResultDto {
  @ApiProperty({ description: 'Total score', example: '7' })
  @IsInt()
  totalScore: number;

  @ApiProperty({ description: 'Total questions', example: '10' })
  @IsInt()
  totalQuestions: number;
}
