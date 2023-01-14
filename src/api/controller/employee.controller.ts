import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";


import { EmployeeService } from "@service/employee.service";

export class EmployeeController {
  private responseParser: ResponseParser;
  private employeeService: EmployeeService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.employeeService = new EmployeeService();
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
 

  
  public createEmployee = async (req: Request, res: Response): Promise<void> => {
    const {
      body: {name,designationId,hospitalId,locationId },
    } = req;
    const response = await this.employeeService.create(name,designationId,hospitalId,locationId);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

  

  



}
