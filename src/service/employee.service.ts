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
import { EmployeeRepo } from "@database/repository/employee.repository";
import { EmployeeRegister } from '../type/user';

export class EmployeeService {
  constructor() {
  }
  public async create(
  name:string,
  designationId:string,
  hospitalId:string,
  locationId:string,
  ): Promise<EmployeeRegister> {
    const employeeRepo = getManager().getCustomRepository(EmployeeRepo);
   

    const data = await employeeRepo.save({name,designationId,hospitalId,locationId
  });
    return data;

  
  }

  




}
