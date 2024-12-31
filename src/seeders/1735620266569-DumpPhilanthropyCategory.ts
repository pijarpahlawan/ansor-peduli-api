import { MigrationInterface, QueryRunner } from 'typeorm';

export class DumpPhilanthropyCategory1735620266569
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "philanthropy_categories" (
            "name", "created_at", "updated_at"
        ) VALUES
        ('Category 1', '2021-10-01', '2021-10-01'),
        ('Category 2', '2021-10-02', '2021-10-02');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "philanthropy_categories";`);
  }
}
