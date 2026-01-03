import { incidentRepository } from './incident.repository';
import { shiftRepository } from '../shifts/shift.repository';
import { AppError } from '../../shared/errors/AppError';

export class IncidentService {
    async create(data: any, userId: number){
        const shift = await shiftRepository.findOne({
            where: {id: data.shiftId, active: true}
        });

        if (!shift) {
            throw new AppError('Shift not active or not found', 400);
        }

        const incident = incidentRepository.create({
            ...data,
            shift,
            assignedTo: {id: userId}
        });

        return incidentRepository.save(incident);
    }

    async updateStatus(id: number, status: string){
        const incident = await incidentRepository.findOne({ where: {id}});
        if (!incident) throw new AppError('Incident not found', 404);

        incident.status = status as any;
        return incidentRepository.save(incident);
    }
}