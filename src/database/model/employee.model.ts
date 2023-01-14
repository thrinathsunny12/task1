import { Hospital } from "./hospital.model";
import { Jobtype } from "./jobtype.model";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Xref } from "./xref.model";
import { Address } from './address.model';

@Entity("employee")
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;
  @Column()
  public designationId: string;

  @Column()
  public hospitalId: string;

  @Column()
  public locationId: string;

  @OneToOne(() => Jobtype, (jobtype: Jobtype) => jobtype.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({name:'designation_id',referencedColumnName:'id'})
  jobtype: Jobtype;

  @OneToMany(() => Xref, (xref: Xref) => xref.employee, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  xref: Xref[];

  @ManyToOne(() => Hospital, (hospital: Hospital) => hospital.employee)
  @JoinColumn({ name: "hospital_id" })
  hospital: Hospital;

 
  @OneToOne(() => Address, (address: Address) => address.employeeId, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({name:'id',referencedColumnName:'employeeId'})
  address: Address;

}
