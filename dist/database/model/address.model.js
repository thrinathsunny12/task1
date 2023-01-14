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
exports.Address = void 0;
const typeorm_1 = require("typeorm");
const employee_model_1 = require("./employee.model");
let Address = class Address {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Address.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Address.prototype, "pincode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Address.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => employee_model_1.Employee, (employee) => employee.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", employee_model_1.Employee)
], Address.prototype, "employee", void 0);
Address = __decorate([
    (0, typeorm_1.Entity)("address")
], Address);
exports.Address = Address;
//# sourceMappingURL=address.model.js.map