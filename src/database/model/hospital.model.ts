import { Speciality } from './speciality.model';
import { Employee } from './employee.model';

import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    OneToMany,
    OneToOne,
  } from "typeorm";
import { Jobtype } from './jobtype.model';
  
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

    @OneToMany(()=>Employee,(employee:Employee)=>employee.hospital,{
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
    })
    employee:Employee



    @OneToOne(() => Jobtype, (jobtype: Jobtype) => jobtype.hospital, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
 jobtype:Jobtype

   
  
  }