import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePhilanthropyTransactionTable1735440198861
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'philanthropy_transactions',
        columns: [
          {
            name: 'transaction_id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'donor',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'input_by',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'philanthropy_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'amount',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'philanthropy_transactions',
      new TableForeignKey({
        name: 'FK_transactions_philanthropy',
        columnNames: ['philanthropy_id'],
        referencedColumnNames: ['philanthropy_id'],
        referencedTableName: 'philanthropies',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'philanthropy_transactions',
      new TableForeignKey({
        name: 'FK_transactions_input_by',
        columnNames: ['input_by'],
        referencedColumnNames: ['user_id'],
        referencedTableName: 'user_accounts',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('philanthropy_transactions');
  }
}
