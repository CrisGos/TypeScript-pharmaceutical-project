import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Medicine } from './medicine';
import { Patient } from './patient';


@Table({
    tableName:"prescriptions",
    timestamps:true,
})
export class Prescription extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    dosage!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    frequency!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    duration!: string;

    @ForeignKey(() => Medicine)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    medicineId!: number;

    @BelongsTo(() => Medicine)
    medicine!: Medicine;

    @ForeignKey(() => Patient)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    patientId!: number;

    @BelongsTo(() => Patient)
    patient!: Patient;
}