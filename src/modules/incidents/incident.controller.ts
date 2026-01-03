import { Request, Response} from 'express';
import { IncidentService } from './incident.service';

const service = new IncidentService();

export class IncidentController {
    async create(req: any, res: Response){
        const incident = await service.create(req.body, req.user.sub);
        res.status(201).json({ succes: true, data: incident});
    }

    async updateStatus(req: Request, res: Response){
        const incident = await service.updateStatus(
            Number(req.params.id),
            req.body.status
        );
        res.json({success: true, data: incident})
    }
}