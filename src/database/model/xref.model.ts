import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("xref_employee-patient")
  export class Xref{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public employeeId: string;

    @Column()
    public patientId: string;
  
  }