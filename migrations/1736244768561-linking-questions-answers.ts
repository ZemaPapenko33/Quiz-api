import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class LinkingQuestionsAnswers1736244768561
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'answers',
      new TableColumn({
        name: 'question_id',
        type: 'uuid',
        isNullable: false,
      }),
    );

    await queryRunner.createForeignKey(
      'answers',
      new TableForeignKey({
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('answers');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('question_id') !== -1,
    );

    if (foreignKey) {
      await queryRunner.dropForeignKey('answers', foreignKey);
    }

    await queryRunner.dropColumn('answers', 'question_id');
  }
}
