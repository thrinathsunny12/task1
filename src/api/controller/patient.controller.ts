import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";


import { PatientService } from "@service/patient.service";

export class PatientController {
  private responseParser: ResponseParser;
  private patientService: PatientService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.patientService = new PatientService();
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
 

  
  public createPatient = async (req: Request, res: Response): Promise<void> => {
    const {
      body: { name,dob },
    } = req;
    const response = await this.patientService.create(name,dob);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

  

  



}
