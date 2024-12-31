import { MigrationInterface, QueryRunner } from 'typeorm';

export class DumpPhilanthropy1735635549377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO "philanthropies" (
        "initiator", "category_id", "name", "banner_path", "description",
        "target", "current", "status", "deadline", "created_at", "updated_at"
    ) VALUES
    (1, 1, 'Philanthropy 1', 'banner1.jpg', 'Description 1', 1000, 0, 'open', '2021-10-01', '2021-10-01', '2021-10-01'),
    (2, 2, 'Philanthropy 2', 'banner2.jpg', 'Description 2', 2000, 0, 'open', '2021-10-02', '2021-10-02', '2021-10-02');
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "philanthropies";`);
  }
}
