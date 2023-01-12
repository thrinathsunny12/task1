import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("job_type")
  export class Jobtype{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public name: string;


    @Column()
    public description: string;

  }