import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

export default class user extends Model {}

    user.init({
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true

        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'user',
        tableName: 'user',
        timestamps: false,
    });