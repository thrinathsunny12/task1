import { EntityRepository, Repository } from "typeorm";
import {Patient} from "../model/patient.model"

@EntityRepository(Patient)
export class PatientRepo extends Repository<Patient> {
   
}