import { Router } from 'express';
import PatientController from '../controllers/patientController';

export const patientRouter = Router();

try {
    patientRouter.get('/', PatientController.getAllPatients);
    patientRouter.get('/:id', PatientController.getPatientsById);
    patientRouter.post('/', PatientController.createPatients);
    patientRouter.put('/:id', PatientController.updatePatients);
    patientRouter.delete('/:id', PatientController.deletePatients);
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
};