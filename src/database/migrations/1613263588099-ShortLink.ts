import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class ShortLink1613263588099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "short_link",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "originUrl",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "shortUrl",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "codeLink",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "expiresIn",
            type: "timestamp with time zone",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("short_link");
  }
}
