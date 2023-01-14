import { EntityRepository, Repository } from "typeorm";
import { Address } from "../model/address.model";
import { Employee } from "../model/employee.model";

@EntityRepository(Employee)
export class EmployeeRepo extends Repository<Employee> {
  public async getallEmployesswhotreatedPatient(id: string): Promise<any> {
    const qb=await this.createQueryBuilder('employee')
    .leftJoinAndSelect('employee.address','address')
    .leftJoinAndSelect('employee.jobtype','jobtype')
    .leftJoinAndSelect('employee.xref','xref')
    .leftJoinAndSelect('xref.patient','patient')
    .leftJoinAndSelect('employee.address','address')
    .where('xref.patient_id=:id',{id}).getMany()
    console.log(qb);
    return qb;
  }
}
