import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuizResultService } from './quiz-result.service';
import { QuizResultRoutes } from './routes/quizResult.routes';
import { CreateQuizResultDto, ResponseQuizResultDto } from './dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller(QuizResultRoutes.ROOT)
export class QuizResultController {
  constructor(private readonly quizResultService: QuizResultService) {}

  @Get()
  @ApiOperation({ summary: 'Get quiz result' })
  @ApiResponse({
    status: 200,
    description: 'Get quiz result',
    type: [ResponseQuizResultDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Error when retrieving the list of results',
  })
  async findQuizResult(): Promise<ResponseQuizResultDto[]> {
    return await this.quizResultService.findQuizResult();
  }

  @Post()
  @ApiOperation({ summary: 'Create result quiz' })
  @ApiResponse({
    status: 200,
    description: 'Create quiz',
    type: [ResponseQuizResultDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Error when creating a quiz result',
  })
  async createQuizResult(
    @Body() createQuizResultDto: CreateQuizResultDto,
  ): Promise<ResponseQuizResultDto> {
    return await this.quizResultService.createQuizResult(createQuizResultDto);
  }

  @Delete(QuizResultRoutes.BY_ID)
  @ApiOperation({ summary: 'Delete result quiz' })
  @ApiResponse({
    status: 200,
    description: `Quiz with ID has been deleted successfully`,
  })
  @ApiResponse({
    status: 400,
    description: `Error when deleting a quiz result`,
  })
  async deleteQuizResult(@Param('id') id: string): Promise<string> {
    return await this.quizResultService.deleteQuizResult(id);
  }
}
