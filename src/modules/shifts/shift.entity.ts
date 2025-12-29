import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn } from "typeorm";
import { User} from '../users/user.entity';

@Entity('shifts')
export class Shift{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({type: 'date'})
    date!: string;

    @Column()
    startTime!: string;

    @Column()
    endTime!: string;

    @Column({ default: true})
    active!: boolean;

    @ManyToMany(() => User)
    @JoinTable()
    users!: User[];

    @CreateDateColumn()
    createdAt!: Date;
}