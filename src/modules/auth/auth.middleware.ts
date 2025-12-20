import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env';
import { AppError } from '../../shared/errors/AppError';

export function authMiddleware(req: any, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new AppError('Unauthorized', 401);

  try {
    const payload = jwt.verify(token, env.jwtSecret) as any;
    req.user = payload;
    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
