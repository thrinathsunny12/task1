import express from "express";

import { HttpRequestValidator } from "@middleware/http-request-validator";
import { cmsUser, updateBookingStatus } from "@api/validator/cms.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { addressValidation, locationValidation } from "@api/validator/common";

import { AddressController } from "@api/controller/address.controller";

class AddressRoute {
  public router: express.Router = express.Router();
  private addressController: AddressController;
  private httpRequestValidator: HttpRequestValidator;


  constructor() {
    this.addressController = new AddressController();
    this.httpRequestValidator = new HttpRequestValidator();
   
    this.assign();
  }

  private assign() {

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body", addressValidation),
      this.addressController.createAddress
    );
  }
}

export default new AddressRoute().router;
