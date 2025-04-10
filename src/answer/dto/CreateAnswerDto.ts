import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty({ description: 'Question answer', example: 'Variant A' })
  @IsString()
  answer: string;

  @ApiProperty({ description: 'is correct answer', example: 'False' })
  @IsBoolean()
  isCorrect: boolean;

  @ApiProperty({
    description: 'the Question to which this answer refers',
    example: 'iwiwq98-0jjjsa92-asas',
  })
  @IsString()
  questionId: string;
}
