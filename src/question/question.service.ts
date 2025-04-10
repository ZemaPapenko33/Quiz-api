import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionRepository } from './questionRepository.service';
import {
  CreateQuestionDto,
  ResponseQuestionDto,
  UpdateQuestionDto,
} from './dto';
import { QuizService } from 'src/quiz/quiz.service';

@Injectable()
export class QuestionService {
  constructor(
    private readonly quizService: QuizService,
    @InjectRepository(Question)
    private readonly questionRepository: QuestionRepository,
  ) {}

  //Get all questions
  async findAllQuestions(): Promise<ResponseQuestionDto[]> {
    try {
      return await this.questionRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving the list of questions:${error.message}`,
      );
    }
  }

  //Get question by id
  async findQuestionById(id: string): Promise<ResponseQuestionDto> {
    try {
      const question = await this.questionRepository.findOneByOrFail({ id });
      return question;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving a question:${error.message}`,
      );
    }
  }

  //Create question
  async createQuestion(
    createQuestionDto: CreateQuestionDto,
  ): Promise<ResponseQuestionDto> {
    try {
      const quizExists = await this.quizService.findQuizById(
        createQuestionDto.quizId,
      );

      if (!quizExists) {
        throw new NotFoundException(
          `Quiz with ID ${createQuestionDto.quizId} does not exist`,
        );
      }

      const newQuestion = this.questionRepository.create({
        question: createQuestionDto.question,
        quizId: createQuestionDto.quizId,
      });

      return await this.questionRepository.save(newQuestion);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when creating a question:${error.message}`,
      );
    }
  }

  //Update question by id
  async updateQuestion(
    id: string,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<ResponseQuestionDto> {
    try {
      await this.questionRepository.update(id, updateQuestionDto);
      return await this.findQuestionById(id);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error during question update:${error.message}`,
      );
    }
  }

  //Delete question
  async deleteQuestion(id: string): Promise<string> {
    try {
      const result = await this.questionRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Question ID ${id} not found`);
      }
      return `Question with ID${id} has been deleted successfully`;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when deleting a question: ${error.message}`,
      );
    }
  }
}
