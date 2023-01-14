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
exports.Employee = void 0;
const hospital_model_1 = require("./hospital.model");
const jobtype_model_1 = require("./jobtype.model");
const typeorm_1 = require("typeorm");
const xref_model_1 = require("./xref.model");
const address_model_1 = require("./address.model");
let Employee = class Employee {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Employee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "designationId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "hospitalId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => jobtype_model_1.Jobtype, (jobtype) => jobtype.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: 'designation_id', referencedColumnName: 'id' }),
    __metadata("design:type", jobtype_model_1.Jobtype)
], Employee.prototype, "jobtype", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => xref_model_1.Xref, (xref) => xref.employee, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Employee.prototype, "xref", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hospital_model_1.Hospital, (hospital) => hospital.employee),
    (0, typeorm_1.JoinColumn)({ name: "hospital_id" }),
    __metadata("design:type", hospital_model_1.Hospital)
], Employee.prototype, "hospital", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_model_1.Address, (address) => address.employeeId, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'employeeId' }),
    __metadata("design:type", address_model_1.Address)
], Employee.prototype, "address", void 0);
Employee = __decorate([
    (0, typeorm_1.Entity)("employee")
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.model.js.map