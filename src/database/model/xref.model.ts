import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import { Employee } from "./employee.model";
import { Patient } from "./patient.model";
  
  @Entity("xref_employee_patient")
  export class Xref{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public employeeId: string;

    @Column()
    public patientId: string;

    @ManyToOne(()=> Employee,(employee:Employee)=>employee.xref)
    @JoinColumn({name:"employee_id"})
    employee:Employee

    @ManyToOne(()=> Patient,(patient:Patient)=>patient.xref)
    @JoinColumn({name:"patient_id"})
    patient:Patient
  }