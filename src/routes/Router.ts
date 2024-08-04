import { Router } from 'express';
import {medicineRouter} from './';

const router = Router();

router.use('/medicines', medicineRouter);

export default router;