import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from "typeorm";
import { Xref } from "./xref.model";
  
  @Entity("patient")
  export class Patient{
    @PrimaryGeneratedColumn("uuid")
    public id: string;
  
    @Column()
    public name: string;


    @Column()
    public dob: string;

    @OneToMany(() => Xref, (xref: Xref) => xref.employee, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    })
    xref: Xref[];

  }