import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class LinkingAnswerQuizResult1736246244721
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Добавляем колонку answer_id
    await queryRunner.addColumn(
      'quizzes_results_answers',
      new TableColumn({
        name: 'answer_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    // Добавляем внешний ключ для answer_id
    await queryRunner.createForeignKey(
      'quizzes_results_answers',
      new TableForeignKey({
        columnNames: ['answer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'answers',
        onDelete: 'CASCADE',
      }),
    );

    // Добавляем колонку question_id
    await queryRunner.addColumn(
      'quizzes_results_answers',
      new TableColumn({
        name: 'question_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    // Добавляем внешний ключ для question_id
    await queryRunner.createForeignKey(
      'quizzes_results_answers',
      new TableForeignKey({
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Удаляем внешний ключ для answer_id
    const table = await queryRunner.getTable('quizzes_results_answers');
    const answerForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('answer_id') !== -1,
    );
    if (answerForeignKey) {
      await queryRunner.dropForeignKey(
        'quizzes_results_answers',
        answerForeignKey,
      );
    }

    // Удаляем колонку answer_id
    await queryRunner.dropColumn('quizzes_results_answers', 'answer_id');

    // Удаляем внешний ключ для question_id
    const questionForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('question_id') !== -1,
    );
    if (questionForeignKey) {
      await queryRunner.dropForeignKey(
        'quizzes_results_answers',
        questionForeignKey,
      );
    }

    // Удаляем колонку question_id
    await queryRunner.dropColumn('quizzes_results_answers', 'question_id');
  }
}
