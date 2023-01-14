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
exports.Hospital = void 0;
const employee_model_1 = require("./employee.model");
const typeorm_1 = require("typeorm");
const jobtype_model_1 = require("./jobtype.model");
let Hospital = class Hospital {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Hospital.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Hospital.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Hospital.prototype, "managingdoctorId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Hospital.prototype, "specialityId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Hospital.prototype, "pincode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Hospital.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_model_1.Employee, (employee) => employee.hospital, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }),
    __metadata("design:type", employee_model_1.Employee)
], Hospital.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => jobtype_model_1.Jobtype, (jobtype) => jobtype.hospital, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", jobtype_model_1.Jobtype)
], Hospital.prototype, "jobtype", void 0);
Hospital = __decorate([
    (0, typeorm_1.Entity)("hospital")
], Hospital);
exports.Hospital = Hospital;
//# sourceMappingURL=hospital.model.js.map