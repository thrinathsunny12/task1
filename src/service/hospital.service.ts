import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import createError from "http-errors";
import { Mailer } from "@util/mailer";

import constant from "@config/constant";
import { HospitalRegister, Locationuser, LoggedInUser } from "@type/user";
import { JWT_SECRET } from "@config/secret";
import { TIMEZONE } from "@config/secret";
import i18n from "i18n";
import moment from "moment-timezone";
import asyncForEach from "@util/asyncForEach";


import { HospitalRepo } from "@database/repository/hospital.repository";

export class HospitalService {
  constructor() {
  }
  public async create(
    name:string,
    managingdoctorId:string,
    specialityId:string,
  pincode:number,
  location:string
  ): Promise<HospitalRegister> {
    const hospitalRepo = getManager().getCustomRepository(HospitalRepo);
   

    const data = await hospitalRepo.save({name,managingdoctorId,specialityId,pincode,location
  });
    return data;

  
  }

  




}
