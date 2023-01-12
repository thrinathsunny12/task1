import { EntityRepository, Repository } from "typeorm";
import { Address } from '../model/address.model';
import { Hospital } from '../model/hospital.model';



@EntityRepository(Hospital)
export class HospitalRepo extends Repository<Hospital> {
    
}