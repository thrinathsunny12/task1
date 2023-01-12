"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hospitalValidation = exports.addressValidation = exports.employeeValidation = exports.xrefValidation = exports.jobtypeValidation = exports.patientValidation = exports.locationValidation = exports.specialityValidation = exports.optionalRegNumberValidation = exports.requiredRegNumberValidation = exports.requiredStringValidation = exports.optionalStringValidation = exports.loginRegisterValidation = exports.idValidation = exports.stripeIdParamValidation = exports.idParamValidation = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const loginRegisterValidation = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    password: joi_1.default.string()
        .required()
        .min(8)
        .messages({
        "string.base": "password must be a string",
        "any.required": "password is required",
        "string.min": "password must be 8 characters long"
    })
});
exports.loginRegisterValidation = loginRegisterValidation;
const idValidation = (key) => joi_1.default.string()
    .guid({ version: "uuidv4" })
    .required()
    .messages({
    "string.base": `${key} must be a string`,
    "any.required": `${key} is required`,
    "string.guid": `invalid ${key} format`
});
exports.idValidation = idValidation;
const idParamValidation = joi_1.default.object({
    id: idValidation("id")
});
exports.idParamValidation = idParamValidation;
const stripeIdParamValidation = joi_1.default.object({
    id: joi_1.default.string()
        .required()
        .messages({
        "string.base": `must be a string`,
        "any.required": `is required`
    })
});
exports.stripeIdParamValidation = stripeIdParamValidation;
const requiredStringValidation = (key) => joi_1.default.string()
    .required()
    .messages({
    "string.base": `${key} must be a string`,
    "any.required": `${key} is required`
});
exports.requiredStringValidation = requiredStringValidation;
const optionalStringValidation = (key) => joi_1.default.string()
    .optional()
    .messages({
    "string.base": `${key} must be a string`
});
exports.optionalStringValidation = optionalStringValidation;
const requiredRegNumberValidation = (key) => joi_1.default.string()
    .required()
    .regex(/^([0-9A-Z]){2,7}$/)
    .messages({
    "string.base": `Car registration number is not in valid format.`
});
exports.requiredRegNumberValidation = requiredRegNumberValidation;
const optionalRegNumberValidation = (key) => joi_1.default.string()
    .optional()
    .regex(/^([0-9A-Z]){2,7}$/)
    .messages({
    "string.base": `Car registration number is not in valid format.`
});
exports.optionalRegNumberValidation = optionalRegNumberValidation;
const specialityValidation = joi_1.default.object({
    specialityName: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    description: joi_1.default.string()
        .required()
        .messages({
        "string.base": "password must be a string",
        "any.required": "password is required",
        "string.min": "password must be 8 characters long"
    }),
});
exports.specialityValidation = specialityValidation;
const xrefValidation = joi_1.default.object({
    employeeId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    patientId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "password must be a string",
        "any.required": "password is required",
        "string.min": "password must be 8 characters long"
    }),
});
exports.xrefValidation = xrefValidation;
const locationValidation = joi_1.default.object({
    pincode: joi_1.default.number()
        .required()
        .messages({
        "number.pincode": "pincode is invalid",
        "any.required": "pincode is required"
    }),
});
exports.locationValidation = locationValidation;
const addressValidation = joi_1.default.object({
    employeeId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    pincode: joi_1.default.number()
        .required()
        .messages({
        "number.pincode": "pincode is invalid",
        "any.required": "pincode is required"
    }),
    address: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
});
exports.addressValidation = addressValidation;
const hospitalValidation = joi_1.default.object({
    name: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    managinddoctorId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    specialityId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    pincode: joi_1.default.number()
        .required()
        .messages({
        "number.pincode": "pincode is invalid",
        "any.required": "pincode is required"
    }),
    locationId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
});
exports.hospitalValidation = hospitalValidation;
const employeeValidation = joi_1.default.object({
    name: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    designationId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    hospitalId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    locationId: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
});
exports.employeeValidation = employeeValidation;
const patientValidation = joi_1.default.object({
    name: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    dob: joi_1.default.string()
        .required()
        .messages({
        "string.base": "password must be a string",
        "any.required": "password is required",
        "string.min": "password must be 8 characters long"
    }),
});
exports.patientValidation = patientValidation;
const jobtypeValidation = joi_1.default.object({
    name: joi_1.default.string()
        .required()
        .messages({
        "string.base": "Email must be a string",
        "string.email": "Email is invalid",
        "any.required": "Email is required"
    }),
    description: joi_1.default.string()
        .required()
        .messages({
        "string.base": "password must be a string",
        "any.required": "password is required",
        "string.min": "password must be 8 characters long"
    }),
});
exports.jobtypeValidation = jobtypeValidation;
//# sourceMappingURL=common.js.map