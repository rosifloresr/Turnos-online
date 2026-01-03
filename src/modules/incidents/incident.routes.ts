import {Router} from 'express';
import { IncidentController } from './incident.controller';
import { authMiddleware } from '../auth/auth.middleware';

const router = Router();
const controller = new IncidentController();

router.use(authMiddleware);

router.post('/', controller.create);
router.patch('/:id/status', controller.updateStatus);

export default router;