export interface CreateIncidentDTO{
    title: string;
    description: string;
    severity: 'LOW' | 'MEDIUM'| 'HIGH' | 'CRITICAL';
    shiftId: number; 
}