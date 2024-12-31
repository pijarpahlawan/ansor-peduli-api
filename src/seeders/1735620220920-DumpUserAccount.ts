import { MigrationInterface, QueryRunner } from 'typeorm';

export class DumpUserAccount1735620220920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO "user_accounts" (
        "username", "email", "password", "full_name", "created_at", "updated_at"
    ) VALUES
    ('user1', 'user1@example.com', '$2b$10$3', 'User 1', '2021-10-01', '2021-10-01'),
    ('user2', 'user2@example.com', '$2b$10$3', 'User 2', '2021-10-02', '2021-10-02');
`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user_accounts";`);
  }
}
