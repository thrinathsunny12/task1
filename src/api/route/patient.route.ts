import express from "express";

import { HttpRequestValidator } from "@middleware/http-request-validator";
import { cmsUser, updateBookingStatus } from "@api/validator/cms.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { patientValidation } from "@api/validator/common";

import { PatientController } from "@api/controller/patient.controller";

class PatientRoute {
  public router: express.Router = express.Router();
  private patientController: PatientController;
  private httpRequestValidator: HttpRequestValidator;


  constructor() {
    this.patientController = new PatientController();
    this.httpRequestValidator = new HttpRequestValidator();
   
    this.assign();
  }

  private assign() {

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body", patientValidation),
      this.patientController.createPatient
    );

    this.router.get(
      "/:id",
      this.patientController.getallEmployeeswhotreatedpatient
    );
  }
}

export default new PatientRoute().router;
