import { container } from 'tsyringe';
import { Prescription } from '../models/prescription';
import { Medicine } from '../models/medicine';
import DataAnalysis from '../repositories/dataAnalysisRepository';


export default class PrescriptionRepository {
    async findAll() {
        return await Prescription.findAll();
    }

    async findById(id: number) {
        return await Prescription.findByPk(id);
    }

    async findByPatientId(patientId: number) {
        const data: Prescription[] = await Prescription.findAll({
            where: { patientId },
            include: [Medicine],
        });
        const dataAnalysis = container.resolve(DataAnalysis);
        dataAnalysis.dataManagement(data)
        return data
    }


    async create(prescription: Partial<Prescription>) {
        const medicine = await Medicine.findByPk(prescription.medicineId);
        if (!medicine) {
            throw new Error('Medicine not found');
        }

        if (medicine.quantity <= 0) {
            throw new Error('Medicine not available in inventory');
        }


        return await Prescription.create(prescription);
    }

    async update(id: number, prescription: Partial<Prescription>) {
        const existingPrescription = await Prescription.findByPk(id);
        if (existingPrescription) {
            return await existingPrescription.update(prescription);
        }
        throw new Error('Prescription not found');
    }

    async deleteById(id: number) {
        const prescription = await Prescription.findByPk(id);
        if (prescription) {
            await prescription.destroy();
            return;
        }
        throw new Error('Prescription not found');
    }
}