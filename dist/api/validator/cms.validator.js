"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookingStatus = exports.cmsUser = void 0;
const common_1 = require("./common");
const joi_1 = __importDefault(require("@hapi/joi"));
const cmsUser = common_1.loginRegisterValidation;
exports.cmsUser = cmsUser;
const updateBookingStatus = joi_1.default.object({
    bookingId: joi_1.default.number()
        .integer()
        .required()
        .messages({
        "any.required": "id is required",
        "number.base": "id must be a number",
        "number.integer": "id must be an integer",
    })
});
exports.updateBookingStatus = updateBookingStatus;
//# sourceMappingURL=cms.validator.js.map