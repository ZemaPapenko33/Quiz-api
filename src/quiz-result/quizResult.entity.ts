import { QuizResultAnswer } from 'src/quiz-result-answer/quizResultAnswer.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('quizzes_results')
export class quizResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'total_score' })
  totalScore: number;

  @Column({ name: 'total_questions' })
  totalQuestions: number;

  @CreateDateColumn({ type: 'timestamp', name: 'completed_at' })
  completedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true, name: 'deleted_at' })
  deletedAt: Date | null;

  @OneToMany(
    () => QuizResultAnswer,
    (quizResultAnswer) => quizResultAnswer.id,
    { cascade: true },
  )
  answers: QuizResultAnswer[];
}
