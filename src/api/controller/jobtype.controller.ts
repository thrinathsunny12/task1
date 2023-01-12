import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";


import { JobtypeService } from "@service/jobtype.service";

export class JobtypeController {
  private responseParser: ResponseParser;
  private jobtypeService: JobtypeService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.jobtypeService = new JobtypeService();
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
 

  
  public createJobtype = async (req: Request, res: Response): Promise<void> => {
    const {
      body: { name,description },
    } = req;
    const response = await this.jobtypeService.create(name,description);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

  

  



}