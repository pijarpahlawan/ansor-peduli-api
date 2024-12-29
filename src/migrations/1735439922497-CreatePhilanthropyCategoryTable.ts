import { MigrationInterface, QueryRunner, Table, TableUnique } from 'typeorm';

export class CreatePhilanthropyCategoryTable1735439922497
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'philanthropy_categories',
        columns: [
          {
            name: 'category_id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '32',
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
            name: 'UQ_categories_name',
            columnNames: ['name'],
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('philanthropy_categories');
  }
}
