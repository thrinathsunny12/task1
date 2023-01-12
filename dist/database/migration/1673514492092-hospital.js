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
exports.hospital1673514492092 = void 0;
const typeorm_1 = require("typeorm");
class hospital1673514492092 {
    constructor() {
        this.tableName = "hospital";
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
                foreignKeys: [
                    new typeorm_1.TableForeignKey({
                        name: "twink",
                        columnNames: ['speciality_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'speciality',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }), new typeorm_1.TableForeignKey({
                        name: "blink",
                        columnNames: ['location_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'locationss',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }),
                    new typeorm_1.TableForeignKey({
                        name: "link",
                        columnNames: ['managingdoctor_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'job_type',
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
exports.hospital1673514492092 = hospital1673514492092;
//# sourceMappingURL=1673514492092-hospital.js.map