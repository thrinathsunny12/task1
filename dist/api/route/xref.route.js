"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_request_validator_1 = require("@middleware/http-request-validator");
const common_1 = require("@api/validator/common");
const xref_controller_1 = require("@api/controller/xref.controller");
class XrefRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.xrefController = new xref_controller_1.XrefController();
        this.httpRequestValidator = new http_request_validator_1.HttpRequestValidator();
        this.assign();
    }
    assign() {
        this.router.post("/", this.httpRequestValidator.validate("body", common_1.xrefValidation), this.xrefController.createXref);
    }
}
exports.default = new XrefRoute().router;
//# sourceMappingURL=xref.route.js.map