import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class LinkingQuizResult1736320657829 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //добавление колонки quiz id в таблицу questions
    await queryRunner.addColumn(
      'quizzes_results',
      new TableColumn({
        name: 'quiz_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    // Создаем внешний ключ quiz_id
    await queryRunner.createForeignKey(
      'quizzes_results',
      new TableForeignKey({
        columnNames: ['quiz_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'quizzes',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Получаем существующий внешний ключ
    const table = await queryRunner.getTable('quizzes_results');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('quiz_id') !== -1,
    );

    // Удаляем внешний ключ
    if (foreignKey) {
      await queryRunner.dropForeignKey('quizzes_results', foreignKey);
    }

    // Удаляем колонку quiz_id
    await queryRunner.dropColumn('quizzes_results', 'quiz_id');
  }
}
