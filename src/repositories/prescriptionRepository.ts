import { injectable } from 'tsyringe';
import { Prescription } from '../models/prescription';
import { Medicine } from '../models/medicine';
import { createObjectCsvWriter }from 'csv-writer';
import { resolve, join } from 'path';

@injectable()
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
        this.DataAnalysis(data);
        return data
    }

    async DataAnalysis(data: Prescription[]) {
        const now = new Date().toISOString().replace(/[:\-T.]/g, '').slice(0, 14);
        const directory = resolve(__dirname, '../data');
        const filePath = join(directory, `prescriptions_${now}.csv`);
        const csv = createObjectCsvWriter({
            path: filePath,
            header: [
                { id: 'id', title: 'ID' },
                { id: 'dosage', title: 'Dosage' },
                { id: 'frequency', title: 'Frequency' },
                { id: 'duration', title: 'Duration' },
                { id: 'medicineId', title: 'Medicine ID' },
                { id: 'patientId', title: 'Patient ID' },
                { id: 'createdAt', title: 'Created At' },
                { id: 'updatedAt', title: 'Updated At' },
            ]
        });

        const info = data.map(prescription => ({
            id: prescription.id,
            dosage: prescription.dosage,
            frequency: prescription.frequency,
            duration: prescription.duration,
            medicineId: prescription.medicineId,
            patientId: prescription.patientId,
            createdAt: prescription.createdAt,
            updatedAt: prescription.updatedAt,
        }));

        await csv.writeRecords(info);
    };

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