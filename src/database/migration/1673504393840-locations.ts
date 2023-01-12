import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class locations1673504393840 implements MigrationInterface {
    private readonly tableName = "locationss";
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
                  name: "pincode",
                  type: "integer",
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
