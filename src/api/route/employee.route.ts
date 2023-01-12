import express from "express";

import { HttpRequestValidator } from "@middleware/http-request-validator";
import { cmsUser, updateBookingStatus } from "@api/validator/cms.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { employeeValidation, locationValidation } from "@api/validator/common";

import { EmployeeController } from "@api/controller/employee.controller";

class EmployeeRoute {
  public router: express.Router = express.Router();
  private employeeController: EmployeeController;
  private httpRequestValidator: HttpRequestValidator;


  constructor() {
    this.employeeController = new EmployeeController();
    this.httpRequestValidator = new HttpRequestValidator();
   
    this.assign();
  }

  private assign() {

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body", employeeValidation),
      this.employeeController.createEmployee
    );
  }
}

export default new EmployeeRoute().router;
