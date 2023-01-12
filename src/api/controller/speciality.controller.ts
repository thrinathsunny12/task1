import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";


import { SpecialityService } from "@service/speciality.service";

export class SpecialityController {
  private responseParser: ResponseParser;
  private specialityService: SpecialityService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.specialityService = new SpecialityService();
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
 

  
  public createSpeciality= async (req: Request, res: Response): Promise<void> => {
    const {
      body: { specialityName,description },
    } = req;
    const response = await this.specialityService.create(specialityName,description);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

  

  



}
