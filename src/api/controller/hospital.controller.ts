import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";


import { HospitalService } from "@service/hospital.service";

export class HospitalController {
  private responseParser: ResponseParser;
  private hospitalService: HospitalService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.hospitalService = new HospitalService();
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
 

  
  public createHospital = async (req: Request, res: Response): Promise<void> => {
    const {
      body: {name,managingdoctorId,specialityId,pincode,locationId },
    } = req;
    const response = await this.hospitalService.create(name,managingdoctorId,specialityId,pincode,locationId);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

  

  



}
