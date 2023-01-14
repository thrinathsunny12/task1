import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
  } from "typeorm";
import { Employee } from "./employee.model";
  
  @Entity("address")
  export class Address{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public employeeId: string;

    @Column()
    public pincode: number;

    @Column()
    public address: string;

    @OneToOne(() => Employee, (employee: Employee) => employee.id, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
    employee: Employee;
  
  }