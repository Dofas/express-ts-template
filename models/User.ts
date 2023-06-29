import { AllowNull, Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Column
    @Unique
    @AllowNull(false)
    name!: string;

    @Column
    @Unique
    @AllowNull(false)
    email!: string;

    @Column
    @AllowNull(false)
    password!: string;
}
