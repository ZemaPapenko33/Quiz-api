import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionRepository } from './questionRepository.service';
import { QuizModule } from 'src/quiz/quiz.module';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), QuizModule],
  providers: [QuestionService, QuestionRepository],
  controllers: [QuestionController],
  exports: [QuestionService],
})
export class QuestionModule {}
