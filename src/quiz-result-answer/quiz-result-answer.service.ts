import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizResultAnswer } from './quizResultAnswer.entity';
import { QuizResultAnswerRepository } from './quiz-result-answer-repository.service';
import { CreateQuizResultAnswerDto, ResponseQuizResultAnswer } from './dto';

@Injectable()
export class QuizResultAnswerService {
  constructor(
    @InjectRepository(QuizResultAnswer)
    private readonly quizResultAnswerRepository: QuizResultAnswerRepository,
  ) {}

  //Get all quiz result answers
  async findAllQuizResultAnswers(): Promise<ResponseQuizResultAnswer[]> {
    try {
      return await this.quizResultAnswerRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving the list of results answers:${error.message}`,
      );
    }
  }

  //Get quiz result answer by id
  async findQuizResultAnswerById(
    id: string,
  ): Promise<ResponseQuizResultAnswer> {
    try {
      const result = await this.quizResultAnswerRepository.findOneByOrFail({
        id,
      });
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving a result answer:${error.message}`,
      );
    }
  }

  //Create quiz result answer
  async createQuizResultAnswer(
    createQuizResultAnswerDto: CreateQuizResultAnswerDto,
  ): Promise<ResponseQuizResultAnswer> {
    try {
      const newResult = await this.quizResultAnswerRepository.create({
        isCorrect: createQuizResultAnswerDto.isCorrect,
      });

      return await this.quizResultAnswerRepository.save(newResult);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when creating a result answer:${error.message}`,
      );
    }
  }
}
