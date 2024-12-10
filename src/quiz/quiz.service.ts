import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quizRepository.service';
import { CreateQuizDto, ResponseQuizDto, UpdateQuizDto } from './dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: QuizRepository,
  ) {}

  //Get all quizzes
  async findAllQuizzes(): Promise<ResponseQuizDto[]> {
    try {
      return await this.quizRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving the list of quizzes:${error.message}`,
      );
    }
  }

  //Get quiz by id
  async findQuizById(id: string): Promise<ResponseQuizDto> {
    try {
      const quiz = await this.quizRepository.findOneByOrFail({ id });
      return quiz;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving a quiz:${error.message}`,
      );
    }
  }

  //Create quiz
  async createQuiz(createQuizDto: CreateQuizDto): Promise<ResponseQuizDto> {
    try {
      const newQuiz = this.quizRepository.create({
        title: createQuizDto.title,
        description: createQuizDto.description,
      });
      return await this.quizRepository.save(newQuiz);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when creating a quiz:${error.message}`,
      );
    }
  }

  //Update quiz
  async updateQuiz(
    id: string,
    updateQuizDto: UpdateQuizDto,
  ): Promise<ResponseQuizDto> {
    try {
      await this.quizRepository.update(id, updateQuizDto);
      return await this.findQuizById(id);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error during quiz update:${error.message}`,
      );
    }
  }

  //Delete quiz
  async deleteQuiz(id: string): Promise<string> {
    try {
      const result = await this.quizRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Quiz ID ${id} not found`);
      }
      return `Quiz with ID${id} has been deleted successfully`;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when deleting a quiz: ${error.message}`,
      );
    }
  }
}
