import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitialQuizResult1733996402624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quizzes_results',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'total_score',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'total_questions',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'completed_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quizzes_results');
  }
}
