import { Router } from 'express';
import shiftRoutes from './modules/shifts/shift.routes';

const router = Router();

//aca van las rutaasss
import authRoutes from './modules/auth/auth.routes';
router.use('/auth', authRoutes);
router.use('/shifts', shiftRoutes);

export default router;
