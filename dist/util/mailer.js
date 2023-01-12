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
exports.Mailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const logger_1 = __importDefault(require("@core/logger"));
const secret_1 = require("@config/secret");
aws_sdk_1.default.config.update({
    accessKeyId: secret_1.AWS_ACCESS_KEY,
    secretAccessKey: secret_1.AWS_SECRET_ACCESS_KEY,
});
class Mailer {
    constructor() {
        // private transporter = nodemailer.createTransport({
        //   SES: new aws.SES({
        //     apiVersion: AWS_SES_API_VERSION,
        //   }),
        // });
        this.transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: secret_1.FROM_EMAIL,
                pass: secret_1.EMAIL_APP_PASSWORD, //"zuhquvnloowxfudo",
            }
        });
        this.sendMail = ({ to, subject, templateName, data, }) => __awaiter(this, void 0, void 0, function* () {
            try {
                const templatePath = path_1.default.resolve(__dirname, "../../mail-template", `${templateName}.handlebars`);
                const html = yield this.hbs.render(templatePath, data);
                const mailOptions = {
                    to,
                    subject,
                    html,
                    from: secret_1.FROM_EMAIL,
                };
                yield new Promise((resolve, reject) => {
                    // this.transporter.sendMail(
                    //   mailOptions,
                    //   (err: Error, info: SentMessageInfo) => {
                    //     if (err) {
                    //       return reject(err);
                    //     }
                    //     logger.info(
                    //       `Mail sent to ${mailOptions.to} using template ${templateName}`
                    //     );
                    //     logger.info(JSON.stringify(info));
                    //     return resolve(info);
                    //   }
                    // );
                    this.transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            return reject(err);
                        }
                        logger_1.default.info(`Mail sent to ${mailOptions.to} using template ${templateName}`);
                        logger_1.default.info(JSON.stringify(info));
                        return resolve(info);
                    });
                });
            }
            catch (err) {
                logger_1.default.error(err);
            }
        });
        this.hbs = express_handlebars_1.default.create({
            extname: ".handlebars",
            partialsDir: [`${__dirname}/../../mail-template/`],
        });
    }
}
exports.Mailer = Mailer;
//# sourceMappingURL=mailer.js.map