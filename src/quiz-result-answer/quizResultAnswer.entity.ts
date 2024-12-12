import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('quizzes_results_answers')
export class quizResultAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  isCorrect: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'answered_at' })
  answeredAt: Date;
}
