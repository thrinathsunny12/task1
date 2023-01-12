import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import createError from "http-errors";
import { Mailer } from "@util/mailer";

import constant from "@config/constant";
import {  LoggedInUser,Specialityuser } from "@type/user";
import { JWT_SECRET } from "@config/secret";
import { TIMEZONE } from "@config/secret";
import i18n from "i18n";
import moment from "moment-timezone";
import asyncForEach from "@util/asyncForEach";


import { SpecialityRepo } from '../database/repository/speciality.repository';

export class SpecialityService {
  constructor() {
  }
  public async create(
specialityName:string,
description:string
  ): Promise<Specialityuser> {
    const specialityRepo = getManager().getCustomRepository(SpecialityRepo);
   

    const data = await specialityRepo.save({specialityName,description
  });
    return data;

  
  }

  




}
