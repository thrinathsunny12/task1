import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import createError from "http-errors";
import { Mailer } from "@util/mailer";

import constant from "@config/constant";
import { Locationuser, LoggedInUser } from "@type/user";
import { JWT_SECRET } from "@config/secret";
import { TIMEZONE } from "@config/secret";
import i18n from "i18n";
import moment from "moment-timezone";
import asyncForEach from "@util/asyncForEach";

import { LocationRepo } from '../database/repository/location.repository';

export class LocationService {
  constructor() {
  }
  public async create(
  pincode:number
  ): Promise<Locationuser> {
    const locationRepo = getManager().getCustomRepository(LocationRepo);
   

    const data = await locationRepo.save({pincode
  });
    return data;

  
  }

  




}
