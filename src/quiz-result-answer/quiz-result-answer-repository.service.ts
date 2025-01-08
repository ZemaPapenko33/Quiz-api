import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { QuizResultAnswer } from './quizResultAnswer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizResultAnswerRepository extends Repository<QuizResultAnswer> {
  constructor(
    @InjectRepository(QuizResultAnswer)
    repository: Repository<QuizResultAnswer>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
