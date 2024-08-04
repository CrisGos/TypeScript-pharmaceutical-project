import { container } from 'tsyringe';
import MedicineService from '../services/medicineService';
import MedicineRepository from '../repositories/medicineRepository';


container.registerSingleton<MedicineRepository>(MedicineRepository);
container.registerSingleton<MedicineService>(MedicineService);
