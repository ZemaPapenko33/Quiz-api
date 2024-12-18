import { Module } from '@nestjs/common';
import { QuizResultService } from './quiz-result.service';
import { QuizResultController } from './quiz-result.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { quizResult } from './quizResult.entity';
import { QuizResultRepository } from './quiz-result-repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([quizResult])],
  providers: [QuizResultService, QuizResultRepository],
  controllers: [QuizResultController],
})
export class QuizResultModule {}
