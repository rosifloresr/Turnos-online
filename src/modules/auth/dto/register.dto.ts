import {UserRole} from '../../users/user.entity';

export interface RegisterDTO{
    name: string;
    email: string;
    password: string;
    role?: UserRole;
}