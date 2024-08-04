import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany,
    AllowNull,
} from 'sequelize-typescript';


@Table({
    tableName:"patients",
    timestamps:true,
})
export class Patient extends Model {
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
    name!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    age!: number;
    
    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    medicalRecord!: string;
}