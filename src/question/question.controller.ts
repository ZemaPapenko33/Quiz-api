import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  CreateQuestionDto,
  ResponseQuestionDto,
  UpdateQuestionDto,
} from './dto';
import { QuestionRoutes } from './routes/questionRoutes.routes';

@Controller(QuestionRoutes.ROOT)
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  @ApiOperation({ summary: 'Get all question' })
  @ApiResponse({
    status: 200,
    description: 'Get all questions',
    type: [ResponseQuestionDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Error when retrieving the list of questions',
  })
  async findAllQuestions(): Promise<ResponseQuestionDto[]> {
    return await this.questionService.findAllQuestions();
  }

  @Get(QuestionRoutes.BY_ID)
  @ApiOperation({ summary: 'Get question by id' })
  @ApiResponse({
    status: 200,
    description: 'Get question by id',
    type: [ResponseQuestionDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Error when searched a question',
  })
  async findQuestionById(
    @Param('id') id: string,
  ): Promise<ResponseQuestionDto> {
    return await this.questionService.findQuestionById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create question' })
  @ApiResponse({
    status: 201,
    description: 'Create question',
    type: [ResponseQuestionDto],
  })
  @ApiResponse({ status: 400, description: 'Error when creating a question' })
  async createQuestion(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<ResponseQuestionDto> {
    return await this.questionService.createQuestion(createQuestionDto);
  }

  @Put(QuestionRoutes.BY_ID)
  @ApiOperation({ summary: 'Update question' })
  @ApiResponse({
    status: 200,
    description: 'Update question',
    type: [ResponseQuestionDto],
  })
  @ApiResponse({ status: 400, description: 'Error when updating a question' })
  async updateQuestion(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ): Promise<ResponseQuestionDto> {
    return await this.questionService.updateQuestion(id, updateQuestionDto);
  }

  @Delete(QuestionRoutes.BY_ID)
  @ApiOperation({ summary: 'Delete question' })
  @ApiResponse({
    status: 200,
    description: 'Deleted question',
  })
  @ApiResponse({ status: 400, description: 'Error when deleted a question' })
  async deleteQuestion(@Param('id') id: string): Promise<string> {
    return await this.questionService.deleteQuestion(id);
  }
}
