import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class speciality1673503565414 implements MigrationInterface {
    private readonly tableName = "speciality";
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
                  name: "speciality_name",
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
