import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class xrefemployeepatient1673516628816 implements MigrationInterface {
    private readonly tableName = "xref_employee_patient";
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
                    name: "patient_id",
                    type: "uuid",
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
                }),
                new TableForeignKey({
                    name: "minki",
                    columnNames: ['patient_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'patient',
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
