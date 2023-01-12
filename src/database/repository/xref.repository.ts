import { EntityRepository, Repository } from "typeorm";
import { Xref } from '../model/xref.model';



@EntityRepository(Xref)
export class XrefRepo extends Repository<Xref> {
    
}