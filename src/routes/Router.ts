import { Router } from 'express';
import { medicineRouter, patientRouter, prescriptionRouter } from './';

const router = Router();

router.use('/medicines', medicineRouter);
router.use('/patients', patientRouter);
router.use('/prescriptions', prescriptionRouter);


export default router;