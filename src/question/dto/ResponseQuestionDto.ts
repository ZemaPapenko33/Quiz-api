import { ApiProperty } from '@nestjs/swagger';

export class ResponseQuestionDto {
  @ApiProperty({
    description: 'Question for quiz',
    example: 'which construction do we use to construct the present perfect?',
  })
  question: string;
}
