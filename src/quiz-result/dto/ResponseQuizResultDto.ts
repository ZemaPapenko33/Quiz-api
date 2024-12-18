import { ApiProperty } from '@nestjs/swagger';

export class ResponseQuizResultDto {
  @ApiProperty({ description: 'Total score', example: '7' })
  totalScore: number;

  @ApiProperty({ description: 'Total questions', example: '10' })
  totalQuestions: number;

  @ApiProperty({
    description: 'Date completed quiz',
    example: '2024-11-19 08:23:04.608',
  })
  completedAt: Date;
}
