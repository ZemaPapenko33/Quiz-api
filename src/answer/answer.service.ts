import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { AnswerRepository } from './answerRepository.service';
import { CreateAnswerDto, ResponseAnswerDto, UpdateAnswerDto } from './dto';
import { QuestionService } from 'src/question/question.service';

@Injectable()
export class AnswerService {
  constructor(
    private readonly questionService: QuestionService,
    @InjectRepository(Answer)
    private readonly answerRepository: AnswerRepository,
  ) {}

  //Get all answers
  async findAllAnswers(): Promise<ResponseAnswerDto[]> {
    try {
      return await this.answerRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving the list of answers:${error.message}`,
      );
    }
  }

  //Get answer by id
  async findAnswerById(id: string): Promise<ResponseAnswerDto> {
    try {
      const answer = await this.answerRepository.findOneByOrFail({ id });
      return answer;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when retrieving a answer:${error.message}`,
      );
    }
  }

  //Create answer
  async createAnswer(
    createAnswerDto: CreateAnswerDto,
  ): Promise<ResponseAnswerDto> {
    try {
      const questionExists = await this.questionService.findQuestionById(
        createAnswerDto.questionId,
      );

      if (!questionExists) {
        throw new NotFoundException(
          `Quiz with ID ${createAnswerDto.questionId} does not exist`,
        );
      }

      const newAnswer = await this.answerRepository.create({
        answer: createAnswerDto.answer,
        isCorrect: createAnswerDto.isCorrect,
        questionId: createAnswerDto.questionId,
      });
      return await this.answerRepository.save(newAnswer);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when creating a answer:${error.message}`,
      );
    }
  }

  //Update answer by id
  async updateAnswer(
    id: string,
    updateAnswerDto: UpdateAnswerDto,
  ): Promise<ResponseAnswerDto> {
    try {
      await this.answerRepository.update(id, updateAnswerDto);
      return await this.findAnswerById(id);
    } catch (error) {
      throw new InternalServerErrorException(
        `Error during answer update:${error.message}`,
      );
    }
  }

  //Delete answer by id
  async deleteAnswer(id: string): Promise<string> {
    try {
      const result = await this.answerRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Answer ID ${id} not found`);
      }
      return `Answer with ID${id} has been deleted successfully`;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error when deleting a answer: ${error.message}`,
      );
    }
  }
}
