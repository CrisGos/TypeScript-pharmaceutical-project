import { Router } from 'express';
import PrescriptionController from '../controllers/prescriptionController';

export const prescriptionRouter = Router();

try {
    prescriptionRouter.get('/', PrescriptionController.getAllPrescriptions);
    prescriptionRouter.get('/:id', PrescriptionController.getPrescriptionsById);
    prescriptionRouter.get('/patient/:patientId', PrescriptionController.getPrescriptionsByPatientId);
    prescriptionRouter.post('/', PrescriptionController.createPrescriptions);
    prescriptionRouter.put('/:id', PrescriptionController.updatePrescriptions);
    prescriptionRouter.delete('/:id', PrescriptionController.deletePrescriptions);
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
};