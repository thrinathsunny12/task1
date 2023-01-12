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
exports.EmployeeService = void 0;
const typeorm_1 = require("typeorm");
const employee_repository_1 = require("@database/repository/employee.repository");
class EmployeeService {
    constructor() {
    }
    create(name, designationId, hospitalId, locationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeRepo = (0, typeorm_1.getManager)().getCustomRepository(employee_repository_1.EmployeeRepo);
            const data = yield employeeRepo.save({ name, designationId, hospitalId, locationId
            });
            return data;
        });
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map