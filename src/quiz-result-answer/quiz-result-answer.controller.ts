import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuizResultAnswerService } from './quiz-result-answer.service';
import { quizResultAnswerRoutes } from './routes/quizResultAnswer.routes';
import { CreateQuizResultAnswerDto, ResponseQuizResultAnswer } from './dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller(quizResultAnswerRoutes.ROOT)
export class QuizResultAnswerController {
  constructor(
    private readonly quizResultAnswerService: QuizResultAnswerService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all result answers' })
  @ApiResponse({
    status: 200,
    description: 'Get all result answers',
    type: [ResponseQuizResultAnswer],
  })
  @ApiResponse({
    status: 400,
    description: 'Error when retrieving the list of result answers',
  })
  async findAllQuizResultAnswers(): Promise<ResponseQuizResultAnswer[]> {
    return await this.quizResultAnswerService.findAllQuizResultAnswers();
  }

  @Get(quizResultAnswerRoutes.BY_ID)
  @ApiOperation({ summary: 'Get result answer by id' })
  @ApiResponse({
    status: 200,
    description: 'Get result answer by id',
    type: [ResponseQuizResultAnswer],
  })
  @ApiResponse({
    status: 400,
    description: 'Error when searched a result answer',
  })
  async findQuizResultAnswerById(
    @Param('id') id: string,
  ): Promise<ResponseQuizResultAnswer> {
    return await this.quizResultAnswerService.findQuizResultAnswerById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create result answer' })
  @ApiResponse({
    status: 200,
    description: 'Create answer',
    type: [ResponseQuizResultAnswer],
  })
  @ApiResponse({ status: 400, description: 'Error when creating a answer' })
  async createQuizResultAnswer(
    @Body() createQuizResultAnswerDto: CreateQuizResultAnswerDto,
  ): Promise<ResponseQuizResultAnswer> {
    return await this.quizResultAnswerService.createQuizResultAnswer(
      createQuizResultAnswerDto,
    );
  }
}
