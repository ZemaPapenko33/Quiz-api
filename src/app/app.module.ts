import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import configurations from 'src/configurations';
import { QuizModule } from 'src/quiz/quiz.module';
import { QuestionModule } from 'src/question/question.module';
import { AnswerModule } from 'src/answer/answer.module';
import { QuizResultAnswerModule } from 'src/quiz-result-answer/quiz-result-answer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    DatabaseModule,
    QuizModule,
    QuestionModule,
    AnswerModule,
    QuizResultAnswerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
