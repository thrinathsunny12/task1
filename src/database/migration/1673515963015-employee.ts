import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class employee1673515963015 implements MigrationInterface {
    private readonly tableName = "employee";
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
                    name: "designation_id",
                    type: "uuid",
                    isNullable: false,
             
                  }, 
               
                {
                    name: "hospital_id",
                    type: "uuid",
                    isNullable: false,
             
                  },   
                  
                  {
                    name: "location_id",
                    type: "uuid",
                    isNullable: false,
             
                  },
              ],
              foreignKeys:[
                new TableForeignKey({
                    name: "twink",
                    columnNames: ['designation_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'job_type',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }),new TableForeignKey({
                    name: "blink",
                    columnNames: ['hospital_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'hospital',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }),
                new TableForeignKey({
                    name: "link",
                    columnNames: ['location_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'locationss',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }),
                
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName);
    }

}
