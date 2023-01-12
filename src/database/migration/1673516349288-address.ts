import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class address1673516349288 implements MigrationInterface {
    private readonly tableName = "address";
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
                  name: "employee_id",
                  type: "uuid",
                  isNullable: false,
           
                },
                {
                    name: "pincode",
                    type: "integer",
                    isNullable: false,
             
                  },   
                    {
                    name: "address",
                    type: "varchar",
                    isNullable: false,
             
                  },
              ],
              foreignKeys:[
                new TableForeignKey({
                    name: "twink",
                    columnNames: ['employee_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'employee',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                })
                
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
