import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class hospital1673514492092 implements MigrationInterface {
    private readonly tableName = "hospital";
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
                    name: "managingdoctor_id",
                    type: "uuid",
                    isNullable: false,
             
                  }, 
               
                {
                    name: "speciality_id",
                    type: "uuid",
                    isNullable: false,
             
                  },   
                  {
                    name: "pincode",
                    type: "integer",
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
                    columnNames: ['speciality_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'speciality',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }),new TableForeignKey({
                    name: "blink",
                    columnNames: ['location_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'locationss',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }),
                new TableForeignKey({
                    name: "link",
                    columnNames: ['managingdoctor_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'job_type',
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
