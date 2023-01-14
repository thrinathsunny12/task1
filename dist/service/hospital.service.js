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
exports.HospitalService = void 0;
const typeorm_1 = require("typeorm");
const hospital_repository_1 = require("@database/repository/hospital.repository");
class HospitalService {
    constructor() {
    }
    create(name, managingdoctorId, specialityId, pincode, locationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospitalRepo = (0, typeorm_1.getManager)().getCustomRepository(hospital_repository_1.HospitalRepo);
            const data = yield hospitalRepo.save({ name, managingdoctorId, specialityId, pincode, locationId
            });
            return data;
        });
    }
    getallHospitalbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospitalRepo = (0, typeorm_1.getManager)().getCustomRepository(hospital_repository_1.HospitalRepo);
            const theedu = yield hospitalRepo.getEmployees(id);
            // const theedu = await hospitalRepo.query(`select hospital.id,hospital.name,hospital.pincode,employee.name,job_type.description,address.address from hospital
            // left join employee
            // ON hospital.id = employee.hospital_id
            // left join job_type 
            // on hospital.managingdoctor_id=job_type.id
            // left join address
            // on employee.id=address.employee_id
            // where employee.name IS NOT NULL`)
            //  console.log(theedu)
            return theedu;
        });
    }
}
exports.HospitalService = HospitalService;
//# sourceMappingURL=hospital.service.js.map