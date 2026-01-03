import { Router } from 'express';
import shiftRoutes from './modules/shifts/shift.routes';
import incidentRoutes from './modules/incidents/incident.routes';

const router = Router();

//aca van las rutaasss
import authRoutes from './modules/auth/auth.routes';
router.use('/auth', authRoutes);
router.use('/shifts', shiftRoutes);
router.use('/incidents', incidentRoutes);

export default router;
