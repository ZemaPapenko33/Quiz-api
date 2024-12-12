import { ApiProperty } from '@nestjs/swagger';

export class ResponseQuizResultAnswer {
  @ApiProperty({ description: 'is correct', example: 'true' })
  isCorrect: boolean;

  @ApiProperty({
    description: 'Date answered',
    example: '2024-11-19 08:23:04.608',
  })
  answeredAt: Date;
}
