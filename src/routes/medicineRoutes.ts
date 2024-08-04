import { Router } from 'express';
import MedicineController from '../controllers/medicineController';

export const medicineRouter = Router();

try {
    medicineRouter.get('/', MedicineController.getAllMedicines);
    medicineRouter.get('/:id', MedicineController.getMedicinesById);
    medicineRouter.post('/', MedicineController.createMedicines);
    medicineRouter.put('/:id', MedicineController.updateMedicines);
    medicineRouter.delete('/:id', MedicineController.deleteMedicines);
    
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
}