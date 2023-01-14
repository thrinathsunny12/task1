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
exports.PatientService = void 0;
const typeorm_1 = require("typeorm");
const patient_repository_1 = require("../database/repository/patient.repository");
const employee_repository_1 = require("@database/repository/employee.repository");
class PatientService {
    constructor() {
    }
    create(name, dob) {
        return __awaiter(this, void 0, void 0, function* () {
            const patientRepo = (0, typeorm_1.getManager)().getCustomRepository(patient_repository_1.PatientRepo);
            const data = yield patientRepo.save({ name, dob
            });
            return data;
        });
    }
    getallemployeeswhotreatedpatient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const patientRepo = (0, typeorm_1.getManager)().getCustomRepository(employee_repository_1.EmployeeRepo);
            const data = patientRepo.getallEmployesswhotreatedPatient(id);
            return data;
        });
    }
}
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map