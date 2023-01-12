import { Application } from "express";

import { AuthenticateRequest } from "@middleware/authenticate-request";

import BaseRoute from "./base.route";
import CmsRoute from "./cms.route";
import locationRoute from "./location.route";
import specialityRoute from "./speciality.route";
import jobtypeRoute from "./jobtype.route";
import { AppConfig } from "aws-sdk";
import patientRoute from "./patient.route";
export class Routes {
  private authenticate;
  constructor() {
    const authMiddleware = new AuthenticateRequest();
    this.authenticate = authMiddleware.validate;
  }
  public routes(app: Application): void {
    // resource and routes mapping comes here
    app.use("/cms", CmsRoute);
    app.use(BaseRoute);
    app.use("/location",locationRoute);
    app.use("/speciality",specialityRoute);
    app.use("/jobtype",jobtypeRoute);
    app.use("/patient",patientRoute)
  }
}
