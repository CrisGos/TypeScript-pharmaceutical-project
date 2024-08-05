import { injectable } from 'tsyringe';
import { createObjectCsvWriter }from 'csv-writer';
import { resolve, join } from 'path';
import { Prescription } from '../models';

@injectable()
export default class DataAnalysis {
    async dataManagement(data: Prescription[]) {
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

}