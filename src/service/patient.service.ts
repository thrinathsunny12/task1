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

import { PatientRepo } from '../database/repository/patient.repository';
import { PatientRegister } from '../type/user';

export class PatientService {
  constructor() {
  }
  public async create(
  name:string,
  dob:string
  ): Promise<PatientRegister> {
    const patientRepo = getManager().getCustomRepository(PatientRepo);
   
    const data = await patientRepo.save({name,dob
  });
    return data;
  }
}
