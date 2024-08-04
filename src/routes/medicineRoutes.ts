import { Router } from 'express';
import MedicineController from '../controllers/medicineController';

export const medicineRouter = Router();

medicineRouter.get('/', MedicineController.getAllMedicines);
medicineRouter.get('/:id', MedicineController.getMedicinesById);
medicineRouter.post('/', MedicineController.createMedicines);
medicineRouter.put('/:id', MedicineController.updateMedicines);
medicineRouter.delete('/:id', MedicineController.deleteMedicines);