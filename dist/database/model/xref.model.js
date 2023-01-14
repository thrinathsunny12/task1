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
exports.Xref = void 0;
const typeorm_1 = require("typeorm");
const employee_model_1 = require("./employee.model");
const patient_model_1 = require("./patient.model");
let Xref = class Xref {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Xref.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Xref.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Xref.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_model_1.Employee, (employee) => employee.xref),
    (0, typeorm_1.JoinColumn)({ name: "employee_id" }),
    __metadata("design:type", employee_model_1.Employee)
], Xref.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_model_1.Patient, (patient) => patient.xref),
    (0, typeorm_1.JoinColumn)({ name: "patient_id" }),
    __metadata("design:type", patient_model_1.Patient)
], Xref.prototype, "patient", void 0);
Xref = __decorate([
    (0, typeorm_1.Entity)("xref_employee_patient")
], Xref);
exports.Xref = Xref;
//# sourceMappingURL=xref.model.js.map