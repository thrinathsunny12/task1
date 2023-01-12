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
exports.JobtypeService = void 0;
const typeorm_1 = require("typeorm");
const jobtype_repository_1 = require("../database/repository/jobtype.repository");
class JobtypeService {
    constructor() {
    }
    create(name, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const jobtypeRepo = (0, typeorm_1.getManager)().getCustomRepository(jobtype_repository_1.JobtypeRepo);
            const data = yield jobtypeRepo.save({ name, description
            });
            return data;
        });
    }
}
exports.JobtypeService = JobtypeService;
//# sourceMappingURL=jobtype.service.js.map