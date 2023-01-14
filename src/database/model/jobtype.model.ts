import { Employee } from "./employee.model";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from "typeorm";
import { Hospital } from "./hospital.model";

@Entity("job_type")
export class Jobtype {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @OneToOne(() => Employee, (employee: Employee) => employee.id, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  employee: Employee;

  @OneToOne(() => Hospital, (hospital: Hospital) => hospital.jobtype, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  hospital: Hospital;
}
