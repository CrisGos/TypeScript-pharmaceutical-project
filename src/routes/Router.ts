import { Router } from 'express';
import { medicineRouter, patientRouter } from './';

const router = Router();

router.use('/medicines', medicineRouter);
router.use('/patients', patientRouter);

export default router;