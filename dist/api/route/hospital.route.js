"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_request_validator_1 = require("@middleware/http-request-validator");
const common_1 = require("@api/validator/common");
const hospital_controller_1 = require("@api/controller/hospital.controller");
class HospitalRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.hospitalController = new hospital_controller_1.HospitalController();
        this.httpRequestValidator = new http_request_validator_1.HttpRequestValidator();
        this.assign();
    }
    assign() {
        this.router.post("/", this.httpRequestValidator.validate("body", common_1.hospitalValidation), this.hospitalController.createHospital);
        this.router.get("/:id", this.hospitalController.getallEmployeesHospitalbyId);
    }
}
exports.default = new HospitalRoute().router;
//# sourceMappingURL=hospital.route.js.map