import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class alteraddress1673544475817 implements MigrationInterface {
    private readonly tableName = "address";
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            this.tableName,
            new TableForeignKey({
                name: "link",
                columnNames: [''],
                referencedColumnNames: ['id'],
                referencedTableName: 'clients',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
