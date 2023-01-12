"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./core/logger"));
const app_1 = __importDefault(require("./app"));
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const portVal = parseInt(val, 10);
    if (isNaN(portVal)) {
        // named pipe
        return val;
    }
    if (portVal >= 0) {
        // port number
        return portVal;
    }
    return false;
}
/**
 * Set HTTP port for application
 */
const port = normalizePort(process.env.PORT || "3001");
app_1.default.set("port", port);
/**
 * Start Express server.
 */
const server = app_1.default.listen(app_1.default.get("port"), () => {
    logger_1.default.info("App is running at http://localhost:" +
        app_1.default.get("port") +
        " in " +
        app_1.default.get("env") +
        " mode");
    logger_1.default.info("Press CTRL-C to stop");
});
exports.default = server;
//# sourceMappingURL=server.js.map