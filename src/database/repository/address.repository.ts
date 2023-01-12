import { EntityRepository, Repository } from "typeorm";
import { Address } from '../model/address.model';



@EntityRepository(Address)
export class AddressRepo extends Repository<Address> {
    
}