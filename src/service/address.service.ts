import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import createError from "http-errors";
import { Mailer } from "@util/mailer";

import constant from "@config/constant";
import { Address, Locationuser, LoggedInUser } from "@type/user";
import { JWT_SECRET } from "@config/secret";
import { TIMEZONE } from "@config/secret";
import i18n from "i18n";
import moment from "moment-timezone";
import asyncForEach from "@util/asyncForEach";


import { AddressRepo } from "@database/repository/address.repository";

export class AddressService {
  constructor() {
  }
  public async create(
    employeeId:string,
  pincode:number,
  address:string
  ): Promise<Address> {
    const addressRepo = getManager().getCustomRepository(AddressRepo);
   

    const data = await addressRepo.save({employeeId,pincode,address
  });
    return data;

  
  }

  




}
