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
    tableName:"medicines",
    timestamps:true,
})
export class Medicine extends Model {
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
    quantity!: number;
    
    @Column({
        type: DataType.DATEONLY,
        allowNull: false,
    })
    expirationDate!: string;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    price!: number;
}