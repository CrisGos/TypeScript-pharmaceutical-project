import { Request, Response } from 'express';
import { container } from 'tsyringe';
import PrescriptionService from '../services/prescriptionService';



export default class PrescriptionController {
    
    static async getAllPrescriptions(_: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescriptions = await prescriptionService.getAllPrescriptions();
            if (!prescriptions) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(prescriptions)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getPrescriptionsById(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescriptions = await prescriptionService.getPrescriptionsById(parseInt(req.params.id));
            if (!prescriptions) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(prescriptions)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async getPrescriptionsByPatientId(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescriptions = await prescriptionService.getPrescriptionsByPatientId(parseInt(req.params.patientId));
            if (!prescriptions) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(prescriptions)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async createPrescriptions(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescriptions = await prescriptionService.createPrescriptions(req.body);
            res.status(201).json(prescriptions);
        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updatePrescriptions(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescriptions = await prescriptionService.updatePrescriptions(parseInt(req.params.id), req.body);
            res.status(200).json(prescriptions);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deletePrescriptions(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescriptions = await prescriptionService.deletePrescriptions(parseInt(req.params.id));
            res.status(200).json(prescriptions);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}