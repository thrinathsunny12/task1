import { EntityRepository, Repository } from "typeorm";
import {Jobtype} from "../model/jobtype.model"

@EntityRepository(Jobtype)
export class JobtypeRepo extends Repository<Jobtype> {
    
}