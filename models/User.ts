import { DataTypes } from 'sequelize';
import sequelize from '../src/db';

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    access_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    refresh_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
});
