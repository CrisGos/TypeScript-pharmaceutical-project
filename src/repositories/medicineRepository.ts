import { injectable } from 'tsyringe';
import { Medicine } from '../models/medicine';

@injectable()
export default class MedicineRepository {
    async findAll() {
        return await Medicine.findAll();
    }

    async findById(id: number) {
        return await Medicine.findByPk(id);
    }

    async create(medicine: Partial<Medicine>) {
        return await Medicine.create(medicine);
    }

    async update(id: number, medicine: Partial<Medicine>) {
        const existingMedicine = await Medicine.findByPk(id);
        if (existingMedicine) {
            return await existingMedicine.update(medicine);
        }
        throw new Error('Medicine not found');
    }

    async deleteById(id: number) {
        const medicine = await Medicine.findByPk(id);
        if (medicine) {
            await medicine.destroy();
            return;
        }
        throw new Error('Medicine not found');
    }
}