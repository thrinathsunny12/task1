import express from "express";

import { HttpRequestValidator } from "@middleware/http-request-validator";
import { cmsUser, updateBookingStatus } from "@api/validator/cms.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import {  specialityValidation } from "@api/validator/common";

import { SpecialityController } from "@api/controller/speciality.controller";

class SpecialityRoute {
  public router: express.Router = express.Router();
  private specialityController: SpecialityController;
  private httpRequestValidator: HttpRequestValidator;


  constructor() {
    this.specialityController = new SpecialityController();
    this.httpRequestValidator = new HttpRequestValidator();
   
    this.assign();
  }

  private assign() {

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body", specialityValidation),
      this.specialityController.createSpeciality
    );
  }
}

export default new SpecialityRoute().router;
