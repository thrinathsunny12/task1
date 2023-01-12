"use strict";
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
exports.UserService = void 0;
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_errors_1 = __importDefault(require("http-errors"));
const i18n_1 = __importDefault(require("i18n"));
const jwt = __importStar(require("jsonwebtoken"));
const mailer_1 = require("@util/mailer");
const user_repository_1 = require("@database/repository/user.repository");
const secret_1 = require("@config/secret");
const constant_1 = __importDefault(require("@config/constant"));
const random_key_generator_1 = require("@util/random-key-generator");
const commonFunctions_1 = require("@util/commonFunctions");
const logger_1 = __importDefault(require("@core/logger"));
class UserService {
    constructor() {
    }
    /**
     * @param  {string} email user's email
     * @param  {string} password password
     * @returns Promise<User>
     */
    register(email, password, firstName, lastName, dob, marketing) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepo = (0, typeorm_1.getManager)().getCustomRepository(user_repository_1.UserRepo);
            const userExists = yield userRepo.findOne({ email: email.toLowerCase() });
            if (userExists) {
                throw new http_errors_1.default.BadRequest(i18n_1.default.__("user_already_exists"));
            }
            const isVerified = false;
            const keyGen = new random_key_generator_1.RandomKeyGenerator();
            const userUniqueKey = keyGen.generate(10);
            const hashedPassword = yield this.getEncryptedPassword(password);
            const user = yield userRepo.save({
                email: email.toLowerCase(),
                password: hashedPassword,
                firstName: firstName.toLocaleLowerCase(),
                lastName: lastName.toLocaleLowerCase(),
                dob,
                marketing,
                userUniqueKey,
                isVerified
            });
            const token = jwt.sign({ id: user.id, email: user.email }, secret_1.JWT_SECRET);
            const verificationLink = `http://localhost:3001/user-email-verification/${userUniqueKey}`;
            const common = new commonFunctions_1.CommonFunctions();
            const mailer = new mailer_1.Mailer();
            mailer.sendMail({
                to: email,
                subject: "Verify Email - Turf War",
                templateName: "registration",
                data: { userName: `${common.toTitleCase(user.firstName)} ${common.toTitleCase(user.lastName)}`, verificationLink }
            });
            return { id: user.id, email: user.email, token };
        });
    }
    //verify registered email
    verifyRegisteredUserEmail(uniqueKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepo = (0, typeorm_1.getManager)().getCustomRepository(user_repository_1.UserRepo);
            const user = yield userRepo.findOne({ userUniqueKey: uniqueKey });
            if (!user) {
                throw new http_errors_1.default.NotFound(i18n_1.default.__("user_not_found"));
            }
            yield userRepo.update({ id: user.id, userUniqueKey: uniqueKey }, { isVerified: true, updatedAt: new Date() });
            const token = jwt.sign({ id: user.id, email: user.email }, secret_1.JWT_SECRET);
            return { id: user.id, email: user.email, token, message: 'Email Verified' };
        });
    }
    /**
     * @param  {string} email
     * @param  {string} password
     * @returns Promise
     */
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepo = (0, typeorm_1.getManager)().getCustomRepository(user_repository_1.UserRepo);
            const user = yield userRepo.findOne({ email: email.toLowerCase(), isVerified: true });
            if (!user) {
                throw new http_errors_1.default.NotFound(i18n_1.default.__("user_not_found"));
            }
            const validPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!validPassword) {
                throw new http_errors_1.default.BadRequest(i18n_1.default.__("incorrect_password"));
            }
            logger_1.default.info(user);
            const token = jwt.sign({ id: user.id, email: user.email }, secret_1.JWT_SECRET);
            return {
                id: user.id,
                email: user.email,
                // stripeCustomerId: user.stripeCustomerId,
                // isAccountSetup: user.isAccountSetup,
                token
            };
        });
    }
    //code to send mail
    // public async resetPasswordInit(
    //   email: string
    // ): Promise<BasicUserDetailResponse> {
    //   const userRepo = getManager().getCustomRepository(UserRepo);
    //   const user = await userRepo.findOne({ email: email.toLowerCase() });
    //   if (!user) {
    //     throw new createError.NotFound(i18n.__("user_not_found"));
    //   }
    //   const resetPasswordOtpRepo = getManager().getCustomRepository(
    //     ResetPasswordOtpRepo
    //   );
    //   await resetPasswordOtpRepo.update(
    //     {
    //       email: email.toLowerCase(),
    //       userId: user.id
    //     },
    //     { deletedAt: new Date() }
    //   );
    //   const otpGenerator = new RandomKeyGenerator();
    //   const otp = otpGenerator.generate(6, "1234567890");
    //   const mailer = new Mailer();
    //   mailer.sendMail({
    //     to: email,
    //     subject: "Reset Password - Press Wash n Go",
    //     templateName: "reset-password",
    //     data: { firstName: user.firstName, otp }
    //   });
    //   await resetPasswordOtpRepo.save({ otp, email, userId: user.id });
    //   return { email, id: user.id };
    // }
    // public async verifyResetPasswordOtp(
    //   userId: string,
    //   otp: string
    // ): Promise<{ id: string }> {
    //   const resetPasswordOtpRepo = getManager().getCustomRepository(
    //     ResetPasswordOtpRepo
    //   );
    //   const otpExists = await resetPasswordOtpRepo.verifyOtp(userId, otp);
    //   if (!otpExists) {
    //     throw new createError.NotAcceptable(i18n.__("incorrect_otp"));
    //   }
    //   return { id: otpExists.id };
    // }
    // public async updatePassword(
    //   otpId: string,
    //   password: string
    // ): Promise<BasicUserDetailResponse> {
    //   const resetPasswordOtpRepo = getManager().getCustomRepository(
    //     ResetPasswordOtpRepo
    //   );
    //   const otpExists = await resetPasswordOtpRepo.getValidOtpDetail(otpId);
    //   if (!otpExists) {
    //     throw new createError.BadRequest(i18n.__("invalid_id"));
    //   }
    //   const processStartedBefore = moment().diff(otpExists.createdAt, "minutes");
    //   logger.info(processStartedBefore);
    //   const otpExpired = otpExists.usedAt || processStartedBefore > 30;
    //   if (otpExpired) {
    //     throw new createError.BadRequest(i18n.__("otp_expired"));
    //   }
    //   const user = await getManager().transaction(async transactionManager => {
    //     const userRepo = transactionManager.getCustomRepository(UserRepo);
    //     const hashedPassword = await this.getEncryptedPassword(password);
    //     await userRepo.update(
    //       { id: otpExists.userId },
    //       { password: hashedPassword }
    //     );
    //     await transactionManager
    //       .getCustomRepository(ResetPasswordOtpRepo)
    //       .update({ id: otpId }, { usedAt: new Date() });
    //     return userRepo.findOne({ id: otpExists.userId });
    //   });
    //   return { id: user.id, email: user.email };
    // }
    // public async completeUserAccount(
    //   userId: string,
    //   accountData: AccountSetupData
    // ): Promise<UserProfile> {
    //   const userRepo = getManager().getCustomRepository(UserRepo);
    //   const user = await userRepo.findOne({ id: userId });
    //   if (!user) {
    //     throw new createError.NotFound(i18n.__("user_not_found"));
    //   }
    //   const userupdate = await userRepo.update(
    //     { id: userId },
    //     { ...accountData.profile }
    //   );
    //   if (userupdate && user.isAccountSetup == false) {
    //     const updatedDetail = await userRepo.findOne({ id: userId });
    //     const userName =
    //       updatedDetail.lastName != null
    //         ? updatedDetail.firstName + " " + updatedDetail.lastName
    //         : updatedDetail.firstName;
    //     const mailer = new Mailer();
    //     mailer.sendMail({
    //       to: user.email,
    //       subject: "Registration Successful - Press Wash n Go",
    //       templateName: "registration",
    //       data: {
    //         email: user.email,
    //         userName: userName
    //       }
    //     });
    //     return {
    //       id: updatedDetail.id,
    //       email: updatedDetail.email,
    //       firstName: updatedDetail.firstName,
    //       lastName: updatedDetail.lastName,
    //       phoneCode: updatedDetail.phoneCode,
    //       contact: updatedDetail.contact,
    //       isAccountSetup: updatedDetail.isAccountSetup,
    //       isMemberSociety: updatedDetail.isMemberSociety,
    //       keyfobSerialId: updatedDetail.keyfobSerialId
    //     };
    //   }
    // }
    /**
     * handles all the cases for login attempts from google or apple
     * @param  {SocialLoginUser} userDetails
     * @returns Promise
     */
    // public async addUserFromSocialPlatform(
    //   userDetails: SocialLoginUser
    // ): Promise<LoggedInUserSocial> {
    //   const userRepo = getManager().getCustomRepository(UserRepo);
    //   // logging in with Apple second time, we don't receive email from apple
    //   const condition =
    //     userDetails.socialPlatform === SocialPlatforms.Apple
    //       ? {
    //           socialPlatformId: userDetails.socialPlatformId
    //         }
    //       : {
    //           email: userDetails.email.toLowerCase()
    //         };
    //   let user = await userRepo.findOne(condition);
    //   let isNewUser = false;
    //   if (!user) {
    //     if (
    //       !userDetails.email &&
    //       userDetails.socialPlatform === SocialPlatforms.Apple
    //     ) {
    //       throw new createError.BadRequest(
    //         i18n.__("user_previously_registered_apple")
    //       );
    //     }
    //     // user has logged in with social platform for first time and does not exist
    //     const stripeHelper = new StripeHelper();
    //     const stripeCustomerId = await stripeHelper.createCustomer(
    //       userDetails.email.toLowerCase()
    //     );
    //     user = await userRepo.save({
    //       ...userDetails,
    //       stripeCustomerId,
    //       email: userDetails.email.toLowerCase()
    //     });
    //     // const mailer = new Mailer();
    //     // mailer.sendMail({
    //     //   to: user.email,
    //     //   subject: "Registration Successful - Press Wash n Go",
    //     //   templateName: "registration",
    //     //   data: { email: user.email }
    //     // });
    //     isNewUser = true;
    //   }
    //   // flow for ==> previously logged in or registration using email
    //   if (user) {
    //     // registered using email
    //     if (!user.socialPlatform) {
    //       throw new createError.NotFound(i18n.__("user_already_exists"));
    //     }
    //     // previosly logged in using some other social platform
    //     if (user.socialPlatform !== userDetails.socialPlatform) {
    //       throw new createError.BadRequest(
    //         i18n.__("user_previously_logged_in_from", user.socialPlatform)
    //       );
    //     }
    //     // previously logged in using same social platform taken care outside this block
    //   }
    //   const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
    //   return {
    //     id: user.id,
    //     email: user.email,
    //     stripeCustomerId: user.stripeCustomerId,
    //     isNewUser: isNewUser,
    //     isAccountSetup: user.isAccountSetup,
    //     token
    //   };
    // }
    /**
     *
     * @param  {string} id user id
     * @returns Promise returning user's basic data
     */
    // public async getUser(id: string): Promise<UserProfile> {
    //   const userRepo = getManager().getCustomRepository(UserRepo);
    //   const user = await userRepo.findOne({
    //     id
    //   });
    //   if (!user) {
    //     throw new createError.NotFound(i18n.__("user_not_found"));
    //   }
    //   const serialId = user.keyfobSerialId == null ? "" : user.keyfobSerialId;
    //   return {
    //     id: user.id,
    //     email: user.email,
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     phoneCode: user.phoneCode,
    //     contact: user.contact,
    //     isAccountSetup: user.isAccountSetup,
    //     isMemberSociety: user.isMemberSociety,
    //     keyfobSerialId: serialId
    //   };
    // }
    // public async updateUser(
    //   id: string,
    //   userObj: Partial<User>
    // ): Promise<UserProfile> {
    //   const userRepo = getManager().getCustomRepository(UserRepo);
    //   const user = await userRepo.findOne({
    //     id
    //   });
    //   if (!user) {
    //     throw new createError.NotFound(i18n.__("user_not_found"));
    //   }
    //   if (!userObj.isMemberSociety && user.keyfobSerialId) {
    //     userObj.keyfobSerialId = "";
    //   }
    //   await userRepo.update({ id }, userObj);
    //   const updatedUser = await userRepo.findOne({
    //     id
    //   });
    //   return {
    //     id: updatedUser.id,
    //     email: updatedUser.email,
    //     firstName: updatedUser.firstName,
    //     lastName: updatedUser.lastName,
    //     phoneCode: updatedUser.phoneCode,
    //     contact: updatedUser.contact,
    //     isAccountSetup: updatedUser.isAccountSetup,
    //     isMemberSociety: updatedUser.isMemberSociety,
    //     keyfobSerialId: updatedUser.keyfobSerialId
    //   };
    // }
    // public async updateUserPassword(
    //   id: string,
    //   oldPassword: string,
    //   newPassword: string
    // ): Promise<void> {
    //   const userRepo = getManager().getCustomRepository(UserRepo);
    //   const user = await userRepo.findOne({
    //     id
    //   });
    //   if (!user) {
    //     throw new createError.NotFound(i18n.__("user_not_found"));
    //   }
    //   if (!user.password) {
    //     throw new createError.NotFound(i18n.__("user_password_not_present"));
    //   }
    //   const validPassword = await bcrypt.compare(oldPassword, user.password);
    //   if (!validPassword) {
    //     throw new createError.BadRequest(i18n.__("incorrect_old_password"));
    //   }
    //   const password = await this.getEncryptedPassword(newPassword);
    //   await userRepo.update({ id }, { password });
    //   return;
    // }
    /**
     * generates a hashed string from the given string
     * @param  {string} password
     * @returns Promise for a hashed string
     */
    getEncryptedPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(constant_1.default.SALT_ROUNDS);
            return bcrypt_1.default.hash(password, salt);
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map