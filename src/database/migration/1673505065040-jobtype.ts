import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class jobtype1673505065040 implements MigrationInterface {
    private readonly tableName = "job_type";
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: this.tableName,
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                  isNullable: false,
                  default: "uuid_generate_v4()",
                },
                {
                  name: "name",
                  type: "varchar",
                  isNullable: false,
           
                },
                {
                    name: "description",
                    type: "varchar",
                    isNullable: false,
             
                  },   
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
