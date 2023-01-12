import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("employee")
  export class Employee{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public designationId: string;

    @Column()
    public hospitalId: string;
  
    @Column()
    public locationId: string;
  }