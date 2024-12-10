import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizRepository extends Repository<Quiz> {
  constructor(@InjectRepository(Quiz) repository: Repository<Quiz>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
