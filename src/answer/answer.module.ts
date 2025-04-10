import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { AnswerRepository } from './answerRepository.service';
import { QuestionModule } from 'src/question/question.module';

@Module({
  imports: [TypeOrmModule.forFeature([Answer]), QuestionModule],
  providers: [AnswerService, AnswerRepository],
  controllers: [AnswerController],
  exports: [AnswerService],
})
export class AnswerModule {}
