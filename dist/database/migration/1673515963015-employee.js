"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employee1673515963015 = void 0;
const typeorm_1 = require("typeorm");
class employee1673515963015 {
    constructor() {
        this.tableName = "employee";
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
                foreignKeys: [
                    new typeorm_1.TableForeignKey({
                        name: "twink",
                        columnNames: ['designation_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'job_type',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }), new typeorm_1.TableForeignKey({
                        name: "blink",
                        columnNames: ['hospital_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'hospital',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }),
                    new typeorm_1.TableForeignKey({
                        name: "link",
                        columnNames: ['location_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'locationss',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }),
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable(this.tableName);
        });
    }
}
exports.employee1673515963015 = employee1673515963015;
//# sourceMappingURL=1673515963015-employee.js.map