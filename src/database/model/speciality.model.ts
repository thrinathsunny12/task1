import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
  } from "typeorm";
import { Hospital } from "./hospital.model";
  
  @Entity("speciality")
  export class Speciality{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public specialityName: string;


    @Column()
    public description: string;

   

  }
  