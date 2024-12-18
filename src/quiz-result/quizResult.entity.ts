import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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
}
