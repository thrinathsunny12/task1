"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cms_controller_1 = require("@api/controller/cms.controller");
const http_request_validator_1 = require("@middleware/http-request-validator");
const cms_validator_1 = require("@api/validator/cms.validator");
const authenticate_request_1 = require("@middleware/authenticate-request");
class CmsRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.cmsController = new cms_controller_1.CmsController();
        this.httpRequestValidator = new http_request_validator_1.HttpRequestValidator();
        const authMiddleware = new authenticate_request_1.AuthenticateRequest();
        this.authenticate = authMiddleware.validate;
        this.assign();
    }
    assign() {
        this.router.post("/login", this.httpRequestValidator.validate("body", cms_validator_1.cmsUser), this.cmsController.login);
        this.router.post("/register", this.httpRequestValidator.validate("body", cms_validator_1.cmsUser), this.cmsController.create);
    }
}
exports.default = new CmsRoute().router;
//# sourceMappingURL=cms.route.js.map