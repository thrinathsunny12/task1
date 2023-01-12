import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
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
  
  }