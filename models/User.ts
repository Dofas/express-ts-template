import { AllowNull, Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
    @Unique
    @AllowNull(false)
    @Column
    name!: string;

    @Unique
    @AllowNull(false)
    @Column
    email!: string;

    @AllowNull(false)
    @Column
    password!: string;
}
