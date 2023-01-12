import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import createError from "http-errors";
import { Mailer } from "@util/mailer";

import constant from "@config/constant";
import { Locationuser, LoggedInUser ,Jobtype} from "@type/user";
import { JWT_SECRET } from "@config/secret";
import { TIMEZONE } from "@config/secret";
import i18n from "i18n";
import moment from "moment-timezone";
import asyncForEach from "@util/asyncForEach";

import { JobtypeRepo } from '../database/repository/jobtype.repository';

export class JobtypeService {
  constructor() {
  }
  public async create(
 name:string,
 description:string
  ): Promise<Jobtype> {
    const jobtypeRepo = getManager().getCustomRepository(JobtypeRepo);
   

    const data = await jobtypeRepo.save({name,description
  });
    return data;

  
  }

  




}