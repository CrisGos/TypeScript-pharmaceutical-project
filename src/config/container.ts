import { container } from 'tsyringe';
import MedicineService from '../services/medicineService';
import MedicineRepository from '../repositories/medicineRepository';
import PatientService from '../services/medicineService';
import PatientRepository from '../repositories/medicineRepository';


container.registerSingleton<MedicineRepository>(MedicineRepository);
container.registerSingleton<MedicineService>(MedicineService);

container.registerSingleton<PatientRepository>(PatientRepository);
container.registerSingleton<PatientService>(PatientService);
