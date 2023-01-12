"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_request_validator_1 = require("@middleware/http-request-validator");
const common_1 = require("@api/validator/common");
const speciality_controller_1 = require("@api/controller/speciality.controller");
class SpecialityRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.specialityController = new speciality_controller_1.SpecialityController();
        this.httpRequestValidator = new http_request_validator_1.HttpRequestValidator();
        this.assign();
    }
    assign() {
        this.router.post("/", this.httpRequestValidator.validate("body", common_1.specialityValidation), this.specialityController.createSpeciality);
    }
}
exports.default = new SpecialityRoute().router;
//# sourceMappingURL=speciality.route.js.map