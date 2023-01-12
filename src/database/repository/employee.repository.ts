import { EntityRepository, Repository } from "typeorm";
import { Address } from '../model/address.model';
import { Employee } from '../model/employee.model';



@EntityRepository(Employee)
export class EmployeeRepo extends Repository<Employee> {
    
}