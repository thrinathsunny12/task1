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
exports.users1608788393127 = void 0;
const typeorm_1 = require("typeorm");
class users1608788393127 {
    constructor() {
        this.tableName = "users";
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
                        name: "email",
                        type: "varchar",
                        isNullable: true,
                        isUnique: false,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "first_name",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "last_name",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "dob",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "marketing",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "user_unique_key",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "is_verified",
                        type: "varchar",
                        isNullable: false,
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable(this.tableName);
        });
    }
}
exports.users1608788393127 = users1608788393127;
//# sourceMappingURL=1608788393127-users.js.map