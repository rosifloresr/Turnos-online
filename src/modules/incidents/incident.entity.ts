import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn} from 'typeorm';
import { Shift } from '../shifts/shift.entity';
import { User } from '../users/user.entity';

export enum IncidentSeverity {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    CRITICAL = 'CRITICAL'
}

export enum IncidentStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    RESOLVED = 'RESOLVED'
}

@Entity('incidents')
export class Incident{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({type: 'enum', enum: IncidentSeverity})
    severity!: IncidentSeverity;

    @Column({type: 'enum', enum: IncidentStatus, default: IncidentStatus.OPEN })
    status!: IncidentStatus;

    @ManyToOne(()=> Shift)
    shift!: Shift;

    @ManyToOne(()=> User)
    assignedTo!: User;

    @CreateDateColumn()
    createdAt!: Date;
}