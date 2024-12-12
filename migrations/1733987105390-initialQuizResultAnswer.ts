import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitialQuizResultAnswer1733987105390
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quizzes_results_answers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'isCorrect',
            type: 'boolean',
            isNullable: false,
          },

          {
            name: 'answered_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quizzes_results_answers');
  }
}
