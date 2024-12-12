import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateQuizResultAnswerDto {
  @ApiProperty({ description: 'Is this answer was correct?', example: 'False' })
  @IsBoolean()
  isCorrect: boolean;
}
