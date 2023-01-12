import express from "express";

import { HttpRequestValidator } from "@middleware/http-request-validator";
import { cmsUser, updateBookingStatus } from "@api/validator/cms.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { locationValidation } from "@api/validator/common";
import { LocationController } from "@api/controller/location.controller";

class LocationRoute {
  public router: express.Router = express.Router();
  private locationController: LocationController;
  private httpRequestValidator: HttpRequestValidator;


  constructor() {
    this.locationController = new LocationController();
    this.httpRequestValidator = new HttpRequestValidator();
   
    this.assign();
  }

  private assign() {

    this.router.post(
      "/",
      this.httpRequestValidator.validate("body", locationValidation),
      this.locationController.createLocation
    );
  }
}

export default new LocationRoute().router;
