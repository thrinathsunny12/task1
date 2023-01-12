import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("speciality")
  export class Speciality{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public specialityName: string;


    @Column()
    public description: string;

  }
  