import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { quizResult } from './quizResult.entity';
import { QuizResultRepository } from './quiz-result-repository.service';
import { CreateQuizResultDto, ResponseQuizResultDto } from './dto';

@Injectable()
export class QuizResultService {
  constructor(
    @InjectRepository(quizResult)
    private readonly quizResultRepository: QuizResultRepository,
  ) {}

  //get  quiz results
  async findQuizResult(): Promise<ResponseQuizResultDto[]> {
    try {
      return await this.quizResultRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving the list of results:${error.message}`,
      );
    }
  }

  //Create quiz result
  async createQuizResult(
    createQuizResultDto: CreateQuizResultDto,
  ): Promise<ResponseQuizResultDto> {
    try {
      const newQuizResult = await this.quizResultRepository.create({
        totalScore: createQuizResultDto.totalScore,
        totalQuestions: createQuizResultDto.totalQuestions,
      });

      return await this.quizResultRepository.save(newQuizResult);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when creating a result :${error.message}`,
      );
    }
  }

  //Delete quiz result
  async deleteQuizResult(id: string): Promise<string> {
    try {
      const result = await this.quizResultRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Quiz result ID ${id} not found`);
      }
      return `Quiz with ID${id} has been deleted successfully`;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when deleting a quiz result: ${error.message}`,
      );
    }
  }
}
