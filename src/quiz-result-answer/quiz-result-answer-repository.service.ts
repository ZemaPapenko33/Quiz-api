import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { quizResultAnswer } from './quizResultAnswer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizResultAnswerRepository extends Repository<quizResultAnswer> {
  constructor(
    @InjectRepository(quizResultAnswer)
    repository: Repository<quizResultAnswer>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
