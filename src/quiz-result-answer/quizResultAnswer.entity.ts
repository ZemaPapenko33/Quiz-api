import { Answer } from 'src/answer/answer.entity';
import { Question } from 'src/question/question.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('quizzes_results_answers')
export class QuizResultAnswer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  isCorrect: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'answered_at' })
  answeredAt: Date;

  @OneToOne(() => Question, (question) => question.id)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @OneToOne(() => Answer, (answer) => answer.id)
  @JoinColumn({ name: 'answer_id' })
  answer: Answer;
}
