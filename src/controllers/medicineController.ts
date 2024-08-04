import { Request, Response } from 'express';
import { container } from 'tsyringe';
import MedicineService from '../services/medicineService';



export default class MedicineController {
    static async getAllMedicines(_: Request, res: Response) {
        try {
            const medicineService = container.resolve(MedicineService);
            const medicines = await medicineService.getAllMedicines();
            if (!medicines) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(medicines)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getMedicinesById(req: Request, res: Response) {
        try {
            const medicineService = container.resolve(MedicineService);
            const medicines = await medicineService.getMedicinesById(parseInt(req.params.id));
            if (!medicines) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(medicines)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createMedicines(req: Request, res: Response) {
        try {
            const medicineService = container.resolve(MedicineService);
            const medicines = await medicineService.createMedicines(req.body);
            console.log(medicines.toJSON());
            res.status(201).json(medicines)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateMedicines(req: Request, res: Response) {
        try {
            const medicineService = container.resolve(MedicineService);
            const medicines = await medicineService.updateMedicines(parseInt(req.params.id), req.body);
            res.status(200).json(medicines);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteMedicines(req: Request, res: Response) {
        try {
            const medicineService = container.resolve(MedicineService);
            const medicines = await medicineService.deleteMedicines(parseInt(req.params.id));
            res.status(200).json(medicines);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}