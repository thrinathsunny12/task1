"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomKeyGenerator = void 0;
class RandomKeyGenerator {
    generate(length, range) {
        let key = "";
        const characters = range || "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            key += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return key;
    }
}
exports.RandomKeyGenerator = RandomKeyGenerator;
//# sourceMappingURL=random-key-generator.js.map