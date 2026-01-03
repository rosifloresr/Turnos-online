import { AppDataSource } from '../../config/database';
import { Incident } from './incident.entity';

export const incidentRepository = AppDataSource.getRepository(Incident);
