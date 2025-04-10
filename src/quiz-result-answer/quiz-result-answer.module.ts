import { Module } from '@nestjs/common';
import { QuizResultAnswerService } from './quiz-result-answer.service';
import { QuizResultAnswerController } from './quiz-result-answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizResultAnswer } from './quizResultAnswer.entity';
import { QuizResultAnswerRepository } from './quiz-result-answer-repository.service';
import { AnswerModule } from 'src/answer/answer.module';
import { QuestionModule } from 'src/question/question.module';
import { QuizModule } from 'src/quiz/quiz.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuizResultAnswer]),
    AnswerModule,
    QuestionModule,
    QuizModule,
  ],
  providers: [QuizResultAnswerService, QuizResultAnswerRepository],
  controllers: [QuizResultAnswerController],
})
export class QuizResultAnswerModule {}
