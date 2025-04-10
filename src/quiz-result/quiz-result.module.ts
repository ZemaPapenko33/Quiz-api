import { Module } from '@nestjs/common';
import { QuizResultService } from './quiz-result.service';
import { QuizResultController } from './quiz-result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { quizResult } from './quizResult.entity';
import { QuizResultRepository } from './quiz-result-repository.service';
import { QuestionModule } from 'src/question/question.module';
import { QuizResultAnswerModule } from 'src/quiz-result-answer/quiz-result-answer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([quizResult]),
    QuestionModule,
    QuizResultAnswerModule,
  ],
  providers: [QuizResultService, QuizResultRepository],
  controllers: [QuizResultController],
})
export class QuizResultModule {}
