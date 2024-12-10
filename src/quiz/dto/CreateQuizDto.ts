import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateQuizDto {
  @ApiProperty({ description: 'Title quiz', example: 'Present Perfect' })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Description quiz',
    example: 'This quiz about present perfect',
  })
  @IsString()
  description: string;
}
