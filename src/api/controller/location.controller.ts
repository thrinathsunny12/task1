import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";

import { LocationService } from "@service/location.service";

export class LocationController {
  private responseParser: ResponseParser;
  private locationService: LocationService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.locationService = new LocationService();
  }

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
 

  
  public createLocation = async (req: Request, res: Response): Promise<void> => {
    const {
      body: { pincode },
    } = req;
    const response = await this.locationService.create(pincode);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

  

  



}
