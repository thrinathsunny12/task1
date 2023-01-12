import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";


import { AddressService } from "@service/address.service";

export class AddressController {
  private responseParser: ResponseParser;
  private addressService: AddressService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.addressService = new AddressService();
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
 

  
  public createAddress = async (req: Request, res: Response): Promise<void> => {
    const {
      body: { employeeId,pincode,address},
    } = req;
    const response = await this.addressService.create(employeeId,pincode,address);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

  

  



}
