import MedicineRepository from '../repositories/medicineRepository';
import { injectable, inject } from 'tsyringe';
import { Medicine } from "../models/medicine";

@injectable()
export default class MedicineService {
    constructor(@inject(MedicineRepository) private medicineRepository: MedicineRepository) {}

    async getAllMedicines() {
        return await this.medicineRepository.findAll();
    }

    async getMedicinesById(id: number) {
        return await this.medicineRepository.findById(id);
    }

    async createMedicines(medicine: Partial<Medicine>) {
        return await this.medicineRepository.create(medicine);
    }

    async updateMedicines(id: number, medicine: Partial<Medicine>) {
        return await this.medicineRepository.update(id, medicine);
    }

    async deleteMedicines(id: number) {
        return await this.medicineRepository.deleteById(id);
    }
}