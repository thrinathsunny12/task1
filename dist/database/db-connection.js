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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
const logger_1 = __importDefault(require("@core/logger"));
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const secret_1 = require("@config/secret");
const path_1 = __importDefault(require("path"));
class DBConnection {
    static databaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            const dbConfig = {
                type: "postgres",
                host: secret_1.TYPEORM_HOST,
                port: Number(secret_1.TYPEORM_PORT),
                username: secret_1.TYPEORM_USERNAME,
                password: secret_1.TYPEORM_PASSWORD,
                database: secret_1.TYPEORM_DATABASE,
                entities: [path_1.default.resolve(__dirname + "/model/*.{js,ts}")],
                migrations: [__dirname + "/migration/*"],
                synchronize: false,
                logging: Boolean(secret_1.TYPEORM_LOGGING),
                namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
            };
            return (0, typeorm_1.createConnection)(dbConfig)
                .then((connection) => {
                this.conn = connection;
                logger_1.default.info("Connected to DB");
            })
                .catch((error) => {
                logger_1.default.error("Not Connected to DB");
                logger_1.default.error(error);
            });
        });
    }
    static closeConnection() {
        return this.conn.close();
    }
}
exports.DBConnection = DBConnection;
//# sourceMappingURL=db-connection.js.map