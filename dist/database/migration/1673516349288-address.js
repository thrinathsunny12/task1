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
exports.address1673516349288 = void 0;
const typeorm_1 = require("typeorm");
class address1673516349288 {
    constructor() {
        this.tableName = "address";
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
                foreignKeys: [
                    new typeorm_1.TableForeignKey({
                        name: "twink",
                        columnNames: ['employee_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'employee',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    })
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
exports.address1673516349288 = address1673516349288;
//# sourceMappingURL=1673516349288-address.js.map