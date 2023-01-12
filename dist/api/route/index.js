"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const authenticate_request_1 = require("@middleware/authenticate-request");
const base_route_1 = __importDefault(require("./base.route"));
const cms_route_1 = __importDefault(require("./cms.route"));
const location_route_1 = __importDefault(require("./location.route"));
const speciality_route_1 = __importDefault(require("./speciality.route"));
const jobtype_route_1 = __importDefault(require("./jobtype.route"));
const patient_route_1 = __importDefault(require("./patient.route"));
const hospital_route_1 = __importDefault(require("./hospital.route"));
const xref_route_1 = __importDefault(require("./xref.route"));
const employee_route_1 = __importDefault(require("./employee.route"));
const address_route_1 = __importDefault(require("./address.route"));
class Routes {
    constructor() {
        const authMiddleware = new authenticate_request_1.AuthenticateRequest();
        this.authenticate = authMiddleware.validate;
    }
    routes(app) {
        // resource and routes mapping comes here
        app.use("/cms", cms_route_1.default);
        app.use(base_route_1.default);
        app.use("/location", location_route_1.default);
        app.use("/speciality", speciality_route_1.default);
        app.use("/jobtype", jobtype_route_1.default);
        app.use("/patient", patient_route_1.default);
        app.use("/hospital", hospital_route_1.default);
        app.use("/xref", xref_route_1.default);
        app.use("/employee", employee_route_1.default);
        app.use("address", address_route_1.default);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map