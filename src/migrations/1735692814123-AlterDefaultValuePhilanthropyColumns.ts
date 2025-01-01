import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterDefaultValuePhilanthropyColumns1735692814123
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('philanthropies', [
      {
        oldColumn: new TableColumn({
          name: 'current',
          type: 'int',
          isNullable: false,
        }),
        newColumn: new TableColumn({
          name: 'current',
          type: 'int',
          isNullable: false,
          default: 0,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'status',
          type: 'varchar',
          length: '8',
          isNullable: false,
        }),
        newColumn: new TableColumn({
          name: 'status',
          type: 'varchar',
          length: '8',
          isNullable: false,
          default: "'open'",
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('philanthropies', [
      {
        oldColumn: new TableColumn({
          name: 'current',
          type: 'int',
          isNullable: false,
          default: 0,
        }),
        newColumn: new TableColumn({
          name: 'current',
          type: 'int',
          isNullable: false,
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'status',
          type: 'varchar',
          length: '8',
          isNullable: false,
          default: "'open'",
        }),
        newColumn: new TableColumn({
          name: 'status',
          type: 'varchar',
          length: '8',
          isNullable: false,
        }),
      },
    ]);
  }
}
