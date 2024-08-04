import PatientRepository from '../repositories/patientRepository';
import { injectable, inject } from 'tsyringe';
import { Patient } from "../models/patient";

@injectable()
export default class PatientService {
    constructor(@inject(PatientRepository) private patientRepository: PatientRepository) {}

    async getAllPatients() {
        return await this.patientRepository.findAll();
    }

    async getPatientsById(id: number) {
        return await this.patientRepository.findById(id);
    }

    async createPatients(patient: Partial<Patient>) {
        return await this.patientRepository.create(patient);
    }

    async updatePatients(id: number, patient: Partial<Patient>) {
        return await this.patientRepository.update(id, patient);
    }

    async deletePatients(id: number) {
        return await this.patientRepository.deleteById(id);
    }
}