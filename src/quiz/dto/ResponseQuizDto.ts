import { ApiProperty } from '@nestjs/swagger';

export class ResponseQuizDto {
  @ApiProperty({ description: 'Title quiz', example: 'Present Perfect' })
  title: string;

  @ApiProperty({
    description: 'Description quiz',
    example: 'This quiz about present perfect',
  })
  description: string;
  @ApiProperty({
    description: 'Date created quiz',
    example: '2024-11-19 08:23:04.608',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date updated quiz',
    example: '2024-11-19 08:23:04.608',
  })
  updatedAt: Date;
}
