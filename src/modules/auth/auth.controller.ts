import { Request, Response } from 'express';
import { AuthService } from './auth.service';

const authService = new AuthService();

export class AuthController {
    async register(req: Request, res: Response){
        const user = await authService.register(req.body);
        return res.status(201).json({success: true, data:user});
    }

    async login(req: Request, res: Response){
        const tokens = await authService.login(
            req.body.email,
            req.body.password
        );
        return res.json({success: true, data: tokens});
    }
}