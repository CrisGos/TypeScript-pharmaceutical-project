import { injectable } from 'tsyringe';
import { Patient } from '../models/patient';

@injectable()
export default class PatientRepository {
    async findAll() {
        return await Patient.findAll();
    }

    async findById(id: number) {
        return await Patient.findByPk(id);
    }

    async create(patient: Partial<Patient>) {
        return await Patient.create(patient);
    }

    async update(id: number, patient: Partial<Patient>) {
        const existingPatient = await Patient.findByPk(id);
        if (existingPatient) {
            return await existingPatient.update(patient);
        }
        throw new Error('Patient not found');
    }

    async deleteById(id: number) {
        const patient = await Patient.findByPk(id);
        if (patient) {
            await patient.destroy();
            return;
        }
        throw new Error('Patient not found');
    }
}