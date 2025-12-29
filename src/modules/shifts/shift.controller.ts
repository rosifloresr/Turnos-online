import {Request, Response} from 'express';
import { ShiftService} from './shift.service';

const service = new ShiftService();

export class ShiftController{
    async create(req: Request, res: Response){
        const shift = await service.create(req.body);
        res.status(201).json({ success: true, data: shift});
    }

    async getActive(req: Request, res: Response){
        const shifts = await service.getActive();
        res.json({success: true, data: shifts});
    }
}