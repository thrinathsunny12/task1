"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unhandledExceptionHandler = void 0;
const logger_1 = __importDefault(require("@core/logger"));
const handleRejectedPromise = (reason, promise) => {
    logger_1.default.error("Unexpected promise rejection occured.", {
        reason,
        ex: promise,
    });
    process.exit(1);
};
const unhandledExceptionHandler = () => {
    process.on("unhandledRejection", handleRejectedPromise);
};
exports.unhandledExceptionHandler = unhandledExceptionHandler;
//# sourceMappingURL=unhandled-exception.js.map