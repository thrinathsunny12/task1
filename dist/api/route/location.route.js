"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_request_validator_1 = require("@middleware/http-request-validator");
const common_1 = require("@api/validator/common");
const location_controller_1 = require("@api/controller/location.controller");
class LocationRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.locationController = new location_controller_1.LocationController();
        this.httpRequestValidator = new http_request_validator_1.HttpRequestValidator();
        this.assign();
    }
    assign() {
        this.router.post("/", this.httpRequestValidator.validate("body", common_1.locationValidation), this.locationController.createLocation);
    }
}
exports.default = new LocationRoute().router;
//# sourceMappingURL=location.route.js.map