"use strict";
// Copyright (C) 2019 by StudioGraphene. All rights reserved.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateRequest = void 0;
const i18n_1 = __importDefault(require("i18n"));
const jwt = __importStar(require("jsonwebtoken"));
const http_errors_1 = __importDefault(require("http-errors"));
const response_parser_1 = require("@util/response-parser");
const constant_1 = __importDefault(require("@config/constant"));
const logger_1 = __importDefault(require("@core/logger"));
class AuthenticateRequest {
    /**
     * Global middleware to check request is autneticated of not
     * @param req
     * @param res
     * @param next
     */
    validate(req, res, next) {
        const token = req.header("x-auth-token");
        if (!token) {
            const responseParser = new response_parser_1.ResponseParser();
            responseParser
                .setHttpCode(constant_1.default.HTTP_STATUS_UNAUTHORIZED)
                .setStatus(false)
                .setResponseCode("unauthorized")
                .setMessage(i18n_1.default.__("unauthorized"))
                .setBody({})
                .send(res);
            return;
        }
        const decodedToken = jwt.decode(token, { json: true });
        logger_1.default.debug(decodedToken);
        if (!decodedToken) {
            throw new http_errors_1.default.Unauthorized(i18n_1.default.__("invalidToken"));
        }
        req.user = decodedToken;
        next();
    }
}
exports.AuthenticateRequest = AuthenticateRequest;
//# sourceMappingURL=authenticate-request.js.map