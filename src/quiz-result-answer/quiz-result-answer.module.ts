import { Module } from '@nestjs/common';
import { QuizResultAnswerService } from './quiz-result-answer.service';
import { QuizResultAnswerController } from './quiz-result-answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { quizResultAnswer } from './quizResultAnswer.entity';
import { QuizResultAnswerRepository } from './quiz-result-answer-repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([quizResultAnswer])],
  providers: [QuizResultAnswerService, QuizResultAnswerRepository],
  controllers: [QuizResultAnswerController],
})
export class QuizResultAnswerModule {}
