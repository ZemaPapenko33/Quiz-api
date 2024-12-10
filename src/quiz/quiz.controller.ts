import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizRoutes } from './routes/quiz.routes';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateQuizDto, ResponseQuizDto, UpdateQuizDto } from './dto';

@Controller(QuizRoutes.ROOT)
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  @ApiOperation({ summary: 'Get all quizzes' })
  @ApiResponse({
    status: 200,
    description: 'Get all quizzes',
    type: [ResponseQuizDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Error when retrieving the list of quizzes',
  })
  async findAllQuizzes(): Promise<ResponseQuizDto[]> {
    return await this.quizService.findAllQuizzes();
  }

  @Get(QuizRoutes.BY_ID)
  @ApiOperation({ summary: 'Get quiz by id' })
  @ApiResponse({
    status: 200,
    description: 'Get quiz by id',
    type: [ResponseQuizDto],
  })
  @ApiResponse({ status: 400, description: 'Error when searched a quiz' })
  async findQuizById(@Param('id') id: string): Promise<ResponseQuizDto> {
    return await this.quizService.findQuizById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create quiz' })
  @ApiResponse({
    status: 201,
    description: 'Create quiz',
    type: [ResponseQuizDto],
  })
  @ApiResponse({ status: 400, description: 'Error when creating a quiz' })
  async createQuiz(
    @Body() createQuizDto: CreateQuizDto,
  ): Promise<ResponseQuizDto> {
    return await this.quizService.createQuiz(createQuizDto);
  }

  @Put(QuizRoutes.BY_ID)
  @ApiOperation({ summary: 'Update quiz by id' })
  @ApiResponse({
    status: 200,
    description: 'Update quiz by id',
    type: [ResponseQuizDto],
  })
  @ApiResponse({ status: 400, description: 'Error when updated a quiz' })
  async updateQuiz(
    @Param('id') id: string,
    @Body() updateQuizDto: UpdateQuizDto,
  ): Promise<ResponseQuizDto> {
    return await this.quizService.updateQuiz(id, updateQuizDto);
  }

  @Delete(QuizRoutes.BY_ID)
  @ApiOperation({ summary: 'Delete quiz by id' })
  @ApiResponse({
    status: 200,
    description: 'Deleted quiz by id',
  })
  @ApiResponse({ status: 400, description: 'Error when deleted a quiz' })
  async deleteQuiz(@Param('id') id: string): Promise<string> {
    return await this.quizService.deleteQuiz(id);
  }
}
