import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AnswerService } from './answer.service';
import { answerRoutes } from './routes/answerRoutes.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateAnswerDto, ResponseAnswerDto, UpdateAnswerDto } from './dto';

@Controller(answerRoutes.ROOT)
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get()
  @ApiOperation({ summary: 'Get all answers' })
  @ApiResponse({
    status: 200,
    description: 'Get all answers',
    type: [ResponseAnswerDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Error when retrieving the list of answers',
  })
  async findAllAnswers(): Promise<ResponseAnswerDto[]> {
    return await this.answerService.findAllAnswers();
  }

  @Get(answerRoutes.BY_ID)
  @ApiOperation({ summary: 'Get answer by id' })
  @ApiResponse({
    status: 200,
    description: 'Get answer by id',
    type: [ResponseAnswerDto],
  })
  @ApiResponse({ status: 400, description: 'Error when searched a answer' })
  async findAnswerById(@Param('id') id: string): Promise<ResponseAnswerDto> {
    return await this.answerService.findAnswerById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create answer' })
  @ApiResponse({
    status: 200,
    description: 'Create answer',
    type: [ResponseAnswerDto],
  })
  @ApiResponse({ status: 400, description: 'Error when creating a answer' })
  async createAnswer(
    @Body() createAnswerDto: CreateAnswerDto,
  ): Promise<ResponseAnswerDto> {
    return await this.answerService.createAnswer(createAnswerDto);
  }

  @Put(answerRoutes.BY_ID)
  @ApiOperation({ summary: 'Update answer' })
  @ApiResponse({
    status: 200,
    description: 'Update answer by id',
    type: [ResponseAnswerDto],
  })
  @ApiResponse({ status: 400, description: 'Error when updated a answer' })
  async updateAnswer(
    @Param('id') id: string,
    @Body() updateAnswerDto: UpdateAnswerDto,
  ): Promise<ResponseAnswerDto> {
    return await this.answerService.updateAnswer(id, updateAnswerDto);
  }

  @Delete(answerRoutes.BY_ID)
  @ApiOperation({ summary: 'Delete answer' })
  @ApiResponse({ status: 200, description: 'Answer was deleted successful' })
  @ApiResponse({ status: 400, description: 'Error when deleted a answer' })
  async deleteAnswer(@Param('id') id: string): Promise<string> {
    return await this.answerService.deleteAnswer(id);
  }
}
