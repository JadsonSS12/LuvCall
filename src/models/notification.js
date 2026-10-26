import { Model, DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

export default class notification extends Model{}
    notification.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        receiver:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
{
    sequelize,
    modelName: "notification",
    tableName: "notification",
    timestamps: true
});
