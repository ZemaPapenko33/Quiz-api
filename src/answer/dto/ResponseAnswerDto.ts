import { ApiProperty } from '@nestjs/swagger';

export class ResponseAnswerDto {
  @ApiProperty({ description: 'Question answer', example: 'Variant B' })
  answer: string;

  @ApiProperty({ description: 'is correct', example: 'true' })
  isCorrect: boolean;

  @ApiProperty({
    description: 'Date created answer',
    example: '2024-11-19 08:23:04.608',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date updated answer',
    example: '2024-11-19 08:23:04.608',
  })
  updatedAt: Date;
}
