import { EntityRepository, Repository } from "typeorm";
import {Location} from "../model/location.model"

@EntityRepository(Location)
export class LocationRepo extends Repository<Location> {
    
}