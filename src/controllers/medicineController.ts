import { Request, Response } from 'express';
import { container } from 'tsyringe';
import MedicineService from '../services/medicineService';



export default class MedicineController {
    static async getAllMedicines(_: Request, res: Response) {
        const medicineService = container.resolve(MedicineService);
        const medicines = await medicineService.getAllMedicines();
        res.json(medicines);
    }

    static async getMedicinesById(req: Request, res: Response) {
        const medicineService = container.resolve(MedicineService);
        const medicines = await medicineService.getMedicinesById(parseInt(req.params.id));
        res.json(medicines);
    }
    
    static async createMedicines(req: Request, res: Response) {
        const medicineService = container.resolve(MedicineService);
        const medicines = await medicineService.createMedicines(req.body);
        res.status(201).json(medicines);
    }

    static async updateMedicines(req: Request, res: Response) {
        const medicineService = container.resolve(MedicineService);
        const medicines = await medicineService.updateMedicines(parseInt(req.params.id), req.body);
        res.status(200).json(medicines);
    }

    static async deleteMedicines(req: Request, res: Response) {
        const medicineService = container.resolve(MedicineService);
        const medicines = await medicineService.deleteMedicines(parseInt(req.params.id));
        res.status(200).json(medicines);
    }
}