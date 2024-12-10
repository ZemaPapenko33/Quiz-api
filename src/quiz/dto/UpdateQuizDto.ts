import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateQuizDto {
  @ApiProperty({
    description: 'Title quiz',
    example: 'Present Perfect',
    required: false,
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'Description quiz',
    example: 'This quiz about present perfect',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
