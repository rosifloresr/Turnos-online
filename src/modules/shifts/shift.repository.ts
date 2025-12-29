import { AppDataSource } from '../../config/database';
import { Shift } from './shift.entity';

export const shiftRepository = AppDataSource.getRepository(Shift);
