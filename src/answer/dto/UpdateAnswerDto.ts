import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateAnswerDto {
  @ApiPropertyOptional({ description: 'Question answer', example: 'Variant b' })
  @IsOptional()
  @IsString()
  answer?: string;

  @ApiPropertyOptional({ description: 'is correct', example: 'false' })
  @IsOptional()
  @IsBoolean()
  isCorrect?: boolean;
}
