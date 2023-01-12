import { Speciality } from './speciality.model';

import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
  } from "typeorm";
  
  @Entity("hospital")
  export class Hospital{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
    @Column()
    public name: string;
    @Column()
    public managingdoctorId: string;
    @Column()
    public specialityId: string;
    @Column()
    public pincode: number;
    @Column()
    public locationId: string;

    @ManyToMany(()=> Speciality,(speciality:Speciality)=>speciality.hospital,{
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    })
    speciality:Speciality[]
  
  }