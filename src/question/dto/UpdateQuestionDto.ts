import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateQuestionDto {
  @ApiPropertyOptional({
    description: 'Updated Question for quiz',
    example:
      'which construction do we use to construct the present perfect question?',
  })
  @IsString()
  @IsOptional()
  question?: string;
}
