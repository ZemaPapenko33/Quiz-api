import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionRepository extends Repository<Question> {
  constructor(@InjectRepository(Question) repository: Repository<Question>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
