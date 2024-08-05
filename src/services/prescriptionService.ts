import PrescriptionRepository from '../repositories/prescriptionRepository';
import { injectable, inject } from 'tsyringe';
import { Prescription } from "../models/prescription";

@injectable()
export default class PrescriptionService {
    constructor(@inject(PrescriptionRepository) private prescriptionRepository: PrescriptionRepository) {}

    async getAllPrescriptions() {
        return await this.prescriptionRepository.findAll();
    }

    async getPrescriptionsById(id: number) {
        return await this.prescriptionRepository.findById(id);
    }

    async getPrescriptionsByPatientId(patientId: number) {
        return await this.prescriptionRepository.findByPatientId(patientId);
    }

    async createPrescriptions(prescription: Partial<Prescription>) {
        return await this.prescriptionRepository.create(prescription);
    }

    async updatePrescriptions(id: number, prescription: Partial<Prescription>) {
        return await this.prescriptionRepository.update(id, prescription);
    }

    async deletePrescriptions(id: number) {
        return await this.prescriptionRepository.deleteById(id);
    }

    // async checkPrescriptionCredentials(
    //     patientId: number,
    //     password: string
    //   ): Promise<Prescription> {
    //     const prescription = await this.getPrescriptionsByPatientId(patientId);
    //     if (prescription && prescription.password === password) {
    //       return prescription;
    //     }
    //     throw new Error("Invalid credentials");
    //   }
}