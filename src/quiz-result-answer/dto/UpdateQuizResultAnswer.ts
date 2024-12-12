import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateQuizResultAnswerDto {
  @ApiPropertyOptional({ description: 'is correct answer?', example: 'false' })
  @IsOptional()
  @IsBoolean()
  isCorrect?: boolean;
}
