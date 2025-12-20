import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserService } from '../users/user.service';
import { env } from '../../config/env';
import { AppError } from '../../shared/errors/AppError';

const userService = new UserService();

export class AuthService {
    async register(data: any){
        const exists = await userService.findByEmail(data.email);
        if (exists) throw new AppError('Usuario existente', 409);

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return userService.create({
            ...data,
            password: hashedPassword,
        });
    }

    async login(email: string, password: string){
        const user = await userService.findByEmail(email);
        if (!user) throw new AppError('Fallo de autenticación', 401);

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new AppError('Fallo de autenticación', 401);

        const accessToken = jwt.sign(
            {sub: user.id, role: user.role},
            env.jwtSecret,
            {expiresIn: '15'}
        );

        const refreshToken = jwt.sign(
            {sub: user.id},
            env.jwtRefreshSecret,
            {expiresIn:'7d'}
        );
    }
}