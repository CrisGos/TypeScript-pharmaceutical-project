import { Request, Response } from 'express';
import { container } from 'tsyringe';
import PatientService from '../services/patientService';



export default class PatientController {
    
    static async getAllPatients(_: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const patients = await patientService.getAllPatients();
            if (!patients) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(patients)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getPatientsById(req: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const patients = await patientService.getPatientsById(parseInt(req.params.id));
            if (!patients) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(patients)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createPatients(req: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const patients = await patientService.createPatients(req.body);
            res.status(201).json(patients);
        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updatePatients(req: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const patients = await patientService.updatePatients(parseInt(req.params.id), req.body);
            res.status(200).json(patients);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deletePatients(req: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const patients = await patientService.deletePatients(parseInt(req.params.id));
            res.status(200).json(patients);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}