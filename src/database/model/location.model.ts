import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("locationss")
  export class Location{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public pincode: number;
  
  }
  