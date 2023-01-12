"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordOtpRepo = void 0;
const typeorm_1 = require("typeorm");
const reset_password_otp_model_1 = require("@database/model/reset-password-otp.model");
let ResetPasswordOtpRepo = class ResetPasswordOtpRepo extends typeorm_1.Repository {
    verifyOtp(userId, otp) {
        return this.findOne({ userId, otp, deletedAt: null });
    }
    getValidOtpDetail(id) {
        return this.findOne({ id, deletedAt: null });
    }
};
ResetPasswordOtpRepo = __decorate([
    (0, typeorm_1.EntityRepository)(reset_password_otp_model_1.ResetPasswordOtp)
], ResetPasswordOtpRepo);
exports.ResetPasswordOtpRepo = ResetPasswordOtpRepo;
//# sourceMappingURL=reset-password-otp.repository.js.map