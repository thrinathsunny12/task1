"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.CmsService = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const http_errors_1 = __importDefault(require("http-errors"));
const cms_user_repository_1 = require("@database/repository/cms-user.repository");
const constant_1 = __importDefault(require("@config/constant"));
const secret_1 = require("@config/secret");
const secret_2 = require("@config/secret");
const i18n_1 = __importDefault(require("i18n"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class CmsService {
    constructor() {
        moment_timezone_1.default.tz.setDefault(secret_2.TIMEZONE);
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmsUserRepo = (0, typeorm_1.getManager)().getCustomRepository(cms_user_repository_1.CmsUserRepo);
            const user = yield cmsUserRepo.findOne({ email: email.toLowerCase() });
            if (!user) {
                throw new http_errors_1.default.NotFound(i18n_1.default.__("user_not_found"));
            }
            const validPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!validPassword) {
                throw new http_errors_1.default.Unauthorized(i18n_1.default.__("incorrect_password"));
            }
            const token = jwt.sign({ id: user.id, email: user.email, password: user.password }, secret_1.JWT_SECRET);
            return { id: user.id, email: user.email, token };
        });
    }
    /**
     * @param  {string} email user's email
     * @param  {string} password password
     * @returns Promise<CmsUser>
     */
    create(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmsUserRepo = (0, typeorm_1.getManager)().getCustomRepository(cms_user_repository_1.CmsUserRepo);
            const salt = yield bcrypt_1.default.genSalt(constant_1.default.SALT_ROUNDS);
            const hashedPassword = yield bcrypt_1.default.hash(password, salt);
            return cmsUserRepo.save({ email, password: hashedPassword });
        });
    }
}
exports.CmsService = CmsService;
//# sourceMappingURL=cms.service.js.map