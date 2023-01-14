import { EntityRepository, Repository } from "typeorm";
import { Address } from '../model/address.model';
import { Hospital } from '../model/hospital.model';



@EntityRepository(Hospital)
export class HospitalRepo extends Repository<Hospital> {
   
    public async getEmployees(id:string):Promise<any>{

        console.log("<><><><><><><><>","90009909")
        console.log("<><><><><><> i am in hospital",id)
        const query = this.createQueryBuilder("hospital")
        .where(`hospital.id=:id `,{id})
        .leftJoin("hospital.employee", "employee")
        // .leftJoinAndSelect("hospital.jobtype","jobtype")
        .select([
        `hospital`,
        'employee' ,
        // 'jobtype'      
        ])
       return query.getMany();

    }
}