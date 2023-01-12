"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtp = exports.updatePassword = exports.socialLogin = exports.resetPassword = exports.register = exports.login = exports.accountSetup = void 0;
const user_1 = require("@database/enum/user");
const joi_1 = __importDefault(require("@hapi/joi"));
// import { newCar } from "./car.validator";
const common_1 = require("./common");
const login = common_1.loginRegisterValidation;
exports.login = login;
const register = common_1.loginRegisterValidation.append({
    firstName: (0, common_1.requiredStringValidation)("firstName"),
    lastName: (0, common_1.requiredStringValidation)("lastName"),
    dob: (0, common_1.requiredStringValidation)("dob"),
    marketing: joi_1.default.optional()
});
exports.register = register;
const resetPassword = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .required()
        .messages({
        "string.base": "email must be a string",
        "string.email": "Email is invalid",
        "any.required": "email is required"
    })
});
exports.resetPassword = resetPassword;
const verifyOtp = joi_1.default.object({
    id: joi_1.default.string()
        .uuid({ version: "uuidv4" })
        .required()
        .messages({
        "string.base": "id must be a string",
        "any.required": "id is required",
        "string.guid": "invalid id format"
    }),
    otp: joi_1.default.string()
        .length(6)
        .required()
        .messages({
        "any.required": "otp is required",
        "string.base": "otp must be a string",
        "string.length": "otp must be a 6-digit long"
    })
});
exports.verifyOtp = verifyOtp;
const updatePassword = joi_1.default.object({
    id: joi_1.default.string()
        .uuid({ version: "uuidv4" })
        .required()
        .messages({
        "string.base": "id must be a string",
        "any.required": "id is required",
        "string.guid": "invalid id format"
    }),
    password: joi_1.default.string()
        .required()
        .min(8)
        .messages({
        "string.base": "password must be a string",
        "any.required": "password is required",
        "string.min": "password must be 8 characters long"
    }),
    confirmPassword: joi_1.default.string()
        .min(8)
        .required()
        .equal(joi_1.default.ref("password"))
        .messages({
        "string.base": "confirm password must be a string",
        "any.only": "password and confirm password do not match",
        "any.required": "confirm password is required",
        "string.min": "password must be 8 characters long"
    })
});
exports.updatePassword = updatePassword;
const accountSetup = joi_1.default.object({
    profile: joi_1.default.object({
        firstName: (0, common_1.requiredStringValidation)("firstName"),
        lastName: (0, common_1.requiredStringValidation)("lastName"),
        phoneCode: (0, common_1.requiredStringValidation)("phoneCode"),
        contact: joi_1.default.number()
            .integer()
            .required()
            .messages({
            "any.required": "contact is required",
            "number.base": "contact must be a number",
            "number.integer": "contact must be an integer"
        }),
        isAccountSetup: joi_1.default.boolean(),
        isMemberSociety: joi_1.default.boolean()
    }).required(),
    paymentCard: joi_1.default.array().allow(null, "")
    //car: newCar.optional().allow(null, "")
});
exports.accountSetup = accountSetup;
const socialLogin = joi_1.default.object({
    email: joi_1.default.when("socialPlatform", {
        is: user_1.SocialPlatforms.Google,
        then: joi_1.default.string()
            .email()
            .required()
            .messages({
            "string.base": "email must be a string",
            "string.email": "Email is invalid",
            "any.required": "email is required"
        }),
        otherwise: joi_1.default.string()
            .email()
            .optional()
            .allow(null, "")
            .messages({
            "string.base": "email must be a string",
            "string.email": "Email is invalid"
        })
    }),
    socialPlatform: joi_1.default.string()
        .valid(...Object.values(user_1.SocialPlatforms))
        .required()
        .messages({
        "string.base": "social platform must be a string",
        "any.required": "social platform is required",
        "any.only": "social platform must be one of [google, apple]"
    }),
    socialPlatformId: (0, common_1.requiredStringValidation)("social platform id"),
    identityToken: joi_1.default.string().when("socialPlatform", {
        is: user_1.SocialPlatforms.Apple,
        then: joi_1.default.required().messages({
            "string.base": "identityToken must be a string",
            "any.required": "identityToken is required"
        }),
        otherwise: joi_1.default.optional().messages({
            "string.base": "identityToken must be a string"
        })
    })
});
exports.socialLogin = socialLogin;
//# sourceMappingURL=base.validator.js.map