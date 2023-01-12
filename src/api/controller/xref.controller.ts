import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";

import { XrefService } from "@service/xref.service";

export class XrefController {
  private responseParser: ResponseParser;
  private xrefService: XrefService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.xrefService = new XrefService();
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
 

  
  public createXref = async (req: Request, res: Response): Promise<void> => {
    const {
      body: { employeeId,patientId },
    } = req;
    const response = await this.xrefService.create(employeeId,patientId);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

  

  



}
