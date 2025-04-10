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

  @Get(quizResultAnswerRoutes.BY_ID)
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
  async findAllQuizResultAnswers(
    @Param('id') quizId: string,
  ): Promise<ResponseQuizResultAnswer[]> {
    return await this.quizResultAnswerService.findAllQuizResultAnswersByIdQuiz(
      quizId,
    );
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
