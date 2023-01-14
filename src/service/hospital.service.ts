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
  locationId:string
  ): Promise<HospitalRegister> {
    const hospitalRepo = getManager().getCustomRepository(HospitalRepo);
   

    const data = await hospitalRepo.save({name,managingdoctorId,specialityId,pincode,locationId
  });
    return data;

  
  }



  public async getallHospitalbyId(id:string):Promise<any>{
    const hospitalRepo = getManager().getCustomRepository(HospitalRepo);
       const theedu = await hospitalRepo.getEmployees(id)
// const theedu = await hospitalRepo.query(`select hospital.id,hospital.name,hospital.pincode,employee.name,job_type.description,address.address from hospital

// left join employee

// ON hospital.id = employee.hospital_id

// left join job_type 

// on hospital.managingdoctor_id=job_type.id

// left join address

// on employee.id=address.employee_id

// where employee.name IS NOT NULL`)
      //  console.log(theedu)
    return theedu
  }
 



}
