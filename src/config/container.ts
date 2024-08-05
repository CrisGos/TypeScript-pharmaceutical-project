import { container } from 'tsyringe';
import MedicineService from '../services/medicineService';
import MedicineRepository from '../repositories/medicineRepository';
import PatientService from '../services/medicineService';
import PatientRepository from '../repositories/medicineRepository';
import PrescriptionService from '../services/prescriptionService';
import PrescriptionRepository from '../repositories/prescriptionRepository';


container.registerSingleton<MedicineRepository>(MedicineRepository);
container.registerSingleton<MedicineService>(MedicineService);

container.registerSingleton<PatientRepository>(PatientRepository);
container.registerSingleton<PatientService>(PatientService);

container.registerSingleton<PrescriptionRepository>(PrescriptionRepository);
container.registerSingleton<PrescriptionService>(PrescriptionService);