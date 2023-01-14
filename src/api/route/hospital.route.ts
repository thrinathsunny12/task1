import express from "express";

import { HttpRequestValidator } from "@middleware/http-request-validator";
import { cmsUser, updateBookingStatus } from "@api/validator/cms.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { hospitalValidation, locationValidation } from "@api/validator/common";

import { HospitalController } from "@api/controller/hospital.controller";

class HospitalRoute {
  public router: express.Router = express.Router();
  private hospitalController: HospitalController;
  private httpRequestValidator: HttpRequestValidator;


  constructor() {
    this.hospitalController = new HospitalController();
    this.httpRequestValidator = new HttpRequestValidator();
   
    this.assign();
  }

  private assign() {

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body", hospitalValidation),
      this.hospitalController.createHospital
    );

    this.router.get(
      "/:id",
      this.hospitalController. getallEmployeesHospitalbyId
    );
  }
}

export default new HospitalRoute().router;
