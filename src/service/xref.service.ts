import { getManager } from "typeorm";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import createError from "http-errors";
import { Mailer } from "@util/mailer";

import constant from "@config/constant";
import { Locationuser, LoggedInUser, Xref } from "@type/user";
import { JWT_SECRET } from "@config/secret";
import { TIMEZONE } from "@config/secret";
import i18n from "i18n";
import moment from "moment-timezone";
import asyncForEach from "@util/asyncForEach";
import { XrefRepo } from "@database/repository/xref.repository";

export class XrefService {
  constructor() {
  }
  public async create(
  employeeId:string,
   patientId:string
  ): Promise<Xref> {
    const xrefRepo = getManager().getCustomRepository(XrefRepo);
   

    const data = await xrefRepo.save({employeeId,patientId
  });
    return data;

  
  }

  




}
