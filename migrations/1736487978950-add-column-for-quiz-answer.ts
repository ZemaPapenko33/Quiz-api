import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddColumnForQuizAnswer1736487978950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'quizzes_results_answers',
      new TableColumn({
        name: 'quiz_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'quizzes_results_answers',
      new TableForeignKey({
        columnNames: ['quiz_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'quizzes',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('quizzes_results_answers');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('quiz_id') !== 1,
    );

    if (foreignKey) {
      await queryRunner.dropForeignKey('quizzes_results_answers', foreignKey);
    }

    await queryRunner.dropColumn('quizzes_results_answers', 'quiz_id');
  }
}
