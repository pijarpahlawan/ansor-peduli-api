import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePhilanthropyTable1735440157006
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'philanthropies',
        columns: [
          {
            name: 'philanthropy_id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'initiator',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'category_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'banner_path',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'target',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'current',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'status',
            type: 'varchar',
            length: '8',
            isNullable: false,
          },
          {
            name: 'deadline',
            type: 'date',
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
      'philanthropies',
      new TableForeignKey({
        name: 'FK_initiator',
        columnNames: ['initiator'],
        referencedColumnNames: ['user_id'],
        referencedTableName: 'user_accounts',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'philanthropies',
      new TableForeignKey({
        name: 'FK_category',
        columnNames: ['category_id'],
        referencedColumnNames: ['category_id'],
        referencedTableName: 'philanthropy_categories',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('philanthropies');
  }
}
