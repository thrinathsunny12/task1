"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationController = void 0;
const i18n_1 = __importDefault(require("i18n"));
const response_parser_1 = require("@util/response-parser");
const constant_1 = __importDefault(require("@config/constant"));
const location_service_1 = require("@service/location.service");
class LocationController {
    constructor() {
        /**
         * @param  {Request} req
         * @param  {Response} res
         * @returns void
         */
        this.createLocation = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { body: { pincode }, } = req;
            const response = yield this.locationService.create(pincode);
            this.responseParser
                .setStatus(true)
                .setHttpCode(constant_1.default.HTTP_STATUS_OK)
                .setBody(response)
                .setMessage(i18n_1.default.__("SUCCESS"))
                .send(res);
        });
        this.responseParser = new response_parser_1.ResponseParser();
        this.locationService = new location_service_1.LocationService();
    }
}
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map