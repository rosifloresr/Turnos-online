import { shiftRepository } from "./shift.repository";
import { userRepository } from "../users/user.repository";
import {AppError } from '../../shared/errors/AppError';

export class ShiftService {
    async create(data: any) {
        const users = await userRepository.findByIds(data.userIds);
        if (users.length !== data.userIds.length){
            throw new AppError('Usuario/s no encontrado/s', 400);
        }

        const shift = shiftRepository.create({
            date: data.date,
            startTime: data.startTime,
            endTime: data.endTime,
            users
        });

        return shiftRepository.save(shift);
    }

    async getActive() {
        return shiftRepository.find({
            where: {active: true},
            relations: ['users']
        });
    }
}