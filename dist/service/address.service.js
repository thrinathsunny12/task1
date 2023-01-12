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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const typeorm_1 = require("typeorm");
const address_repository_1 = require("@database/repository/address.repository");
class AddressService {
    constructor() {
    }
    create(employeeId, pincode, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const addressRepo = (0, typeorm_1.getManager)().getCustomRepository(address_repository_1.AddressRepo);
            const data = yield addressRepo.save({ employeeId, pincode, address
            });
            return data;
        });
    }
}
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map