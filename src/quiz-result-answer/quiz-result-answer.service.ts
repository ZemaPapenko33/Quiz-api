import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizResultAnswer } from './quizResultAnswer.entity';
import { QuizResultAnswerRepository } from './quiz-result-answer-repository.service';
import { CreateQuizResultAnswerDto, ResponseQuizResultAnswer } from './dto';
import { QuestionService } from 'src/question/question.service';
import { AnswerService } from 'src/answer/answer.service';
import { QuizService } from 'src/quiz/quiz.service';

@Injectable()
export class QuizResultAnswerService {
  constructor(
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
    private readonly quizService: QuizService,
    @InjectRepository(QuizResultAnswer)
    private readonly quizResultAnswerRepository: QuizResultAnswerRepository,
  ) {}

  //Get all quiz result answers by ID Quiz
  async findAllQuizResultAnswersByIdQuiz(
    quizId: string,
  ): Promise<ResponseQuizResultAnswer[]> {
    try {
      return await this.quizResultAnswerRepository.find({
        where: {
          quiz: {
            id: quizId,
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving the list of results answers:${error.message}`,
      );
    }
  }

  //Create quiz result answer
  async createQuizResultAnswer(
    createQuizResultAnswerDto: CreateQuizResultAnswerDto,
  ): Promise<ResponseQuizResultAnswer> {
    try {
      const quiz = await this.quizService.findQuizById(
        createQuizResultAnswerDto.quizId,
      );
      const questionExists = await this.questionService.findQuestionById(
        createQuizResultAnswerDto.questionId,
      );
      const answerExists = await this.answerService.findAnswerById(
        createQuizResultAnswerDto.answerId,
      );

      if (!questionExists) {
        throw new NotFoundException(
          `Quiz with ID ${createQuizResultAnswerDto.questionId} does not exist`,
        );
      } else if (!answerExists) {
        throw new NotFoundException(
          `Answer with ID:${createQuizResultAnswerDto.answerId} does not exist`,
        );
      }

      const newResult = await this.quizResultAnswerRepository.create({
        isCorrect: answerExists.isCorrect,
        questionId: createQuizResultAnswerDto.questionId,
        answerId: createQuizResultAnswerDto.answerId,
        quiz,
      });

      return await this.quizResultAnswerRepository.save(newResult);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when creating a result answer:${error.message}`,
      );
    }
  }
}
