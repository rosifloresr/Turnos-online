import { Router } from 'express';

const router = Router();

//aca van las rutaasss
import authRoutes from './modules/auth/auth.routes';
router.use('/auth', authRoutes);


export default router;
