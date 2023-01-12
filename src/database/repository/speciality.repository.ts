import { EntityRepository, Repository } from "typeorm";

import { Speciality } from "@database/model/speciality.model";

@EntityRepository(Speciality)
export class SpecialityRepo extends Repository<Speciality> {



}