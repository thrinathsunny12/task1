"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const base_controller_1 = require("@api/controller/base.controller");
const http_request_validator_1 = require("@middleware/http-request-validator");
const base_validator_1 = require("@api/validator/base.validator");
const authenticate_request_1 = require("@middleware/authenticate-request");
class BaseRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.baseController = new base_controller_1.BaseController();
        this.httpRequestValidator = new http_request_validator_1.HttpRequestValidator();
        const authMiddleware = new authenticate_request_1.AuthenticateRequest();
        this.authenticate = authMiddleware.validate;
        this.assign();
    }
    assign() {
        this.router.post("/register", this.httpRequestValidator.validate("body", base_validator_1.register), this.baseController.register);
        this.router.get("/user-email-verification/:uniqueKey", 
        // this.httpRequestValidator.validate("query", verifyOtp),
        this.baseController.verifyUserEmail);
        this.router.post("/login", this.authenticate, this.httpRequestValidator.validate("body", base_validator_1.login), this.baseController.login);
        // this.router.post(
        //   "/reset-password",
        //   this.httpRequestValidator.validate("body", resetPassword),
        //   this.baseController.resetPasswordInit
        // );
        // this.router.get(
        //   "/otp-verifier",
        //   this.httpRequestValidator.validate("query", verifyOtp),
        //   this.baseController.verifyResetPasswordOtp
        // );
        // this.router.post(
        //   "/update-password",
        //   this.httpRequestValidator.validate("body", updatePassword),
        //   this.baseController.updatePassword
        // );
        // this.router.post(
        //   "/account-setup",
        //   this.authenticate,
        //   this.httpRequestValidator.validate("body", accountSetup),
        //   this.baseController.completeUserAccount
        // );
        // this.router.post(
        //   "/social-login",
        //   this.httpRequestValidator.validate("body", socialLogin),
        //   this.baseController.socialLogin
        // );
        // this.router.get("/country-codes", this.baseController.getCountryCodes);
        this.router.get("/", this.baseController.defaultCheck);
    }
}
exports.default = new BaseRoute().router;
//# sourceMappingURL=base.route.js.map