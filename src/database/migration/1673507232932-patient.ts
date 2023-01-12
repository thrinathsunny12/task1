import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class patient1673507232932 implements MigrationInterface {
    
    private readonly tableName = "patient";
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
                    name: "dob",
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
