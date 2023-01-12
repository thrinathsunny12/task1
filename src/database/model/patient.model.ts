import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("patient")
  export class Patient{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public name: string;


    @Column()
    public dob: string;

  }