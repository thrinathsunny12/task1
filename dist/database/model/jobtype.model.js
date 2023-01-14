"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jobtype = void 0;
const employee_model_1 = require("./employee.model");
const typeorm_1 = require("typeorm");
const hospital_model_1 = require("./hospital.model");
let Jobtype = class Jobtype {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Jobtype.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jobtype.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jobtype.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => employee_model_1.Employee, (employee) => employee.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", employee_model_1.Employee)
], Jobtype.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => hospital_model_1.Hospital, (hospital) => hospital.jobtype, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", hospital_model_1.Hospital)
], Jobtype.prototype, "hospital", void 0);
Jobtype = __decorate([
    (0, typeorm_1.Entity)("job_type")
], Jobtype);
exports.Jobtype = Jobtype;
//# sourceMappingURL=jobtype.model.js.map