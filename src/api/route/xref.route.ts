import express from "express";

import { HttpRequestValidator } from "@middleware/http-request-validator";
import { cmsUser, updateBookingStatus } from "@api/validator/cms.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { xrefValidation } from "@api/validator/common";

import { XrefController } from "@api/controller/xref.controller";

class XrefRoute {
  public router: express.Router = express.Router();
  private xrefController: XrefController;
  private httpRequestValidator: HttpRequestValidator;


  constructor() {
    this.xrefController = new XrefController();
    this.httpRequestValidator = new HttpRequestValidator();
   
    this.assign();
  }

  private assign() {

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body",xrefValidation),
      this.xrefController.createXref
    );
  }
}

export default new XrefRoute().router;
