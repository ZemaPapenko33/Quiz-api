import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { quizResult } from './quizResult.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizResultRepository extends Repository<quizResult> {
  constructor(
    @InjectRepository(quizResult) repository: Repository<quizResult>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
