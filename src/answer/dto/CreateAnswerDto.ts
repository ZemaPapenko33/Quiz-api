import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty({ description: 'Question answer', example: 'Variant A' })
  @IsString()
  answer: string;

  @ApiProperty({ description: 'is correct answer', example: 'False' })
  @IsBoolean()
  isCorrect: boolean;
}
