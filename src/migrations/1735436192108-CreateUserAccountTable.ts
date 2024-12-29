import { MigrationInterface, QueryRunner, Table, TableUnique } from 'typeorm';

export class CreateUserAccountTable1735436192108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_account',
        columns: [
          {
            name: 'account_id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'username',
            type: 'varchar',
            length: '32',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'full_name',
            type: 'varchar',
            length: '255',
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
        uniques: [
          new TableUnique({
            name: 'UQ_accounts_username',
            columnNames: ['username'],
          }),
          new TableUnique({
            name: 'UQ_accounts_email',
            columnNames: ['email'],
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_account');
  }
}
