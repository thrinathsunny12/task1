import express from "express";

import { HttpRequestValidator } from "@middleware/http-request-validator";
import { cmsUser, updateBookingStatus } from "@api/validator/cms.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { jobtypeValidation } from "@api/validator/common";
import { JobtypeController } from "@api/controller/jobtype.controller";

class JobtypeRoute {
  public router: express.Router = express.Router();
  private jobtypeController: JobtypeController;
  private httpRequestValidator: HttpRequestValidator;


  constructor() {
    this.jobtypeController = new JobtypeController();
    this.httpRequestValidator = new HttpRequestValidator();
   
    this.assign();
  }

  private assign() {

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body", jobtypeValidation),
      this.jobtypeController.createJobtype
    );
  }
}

export default new JobtypeRoute().router;