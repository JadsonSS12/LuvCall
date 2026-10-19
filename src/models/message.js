import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from '../database/database.js'
import user from '../models/user.js'
export default class message extends Model{}

message.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    senderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: user,
            key: 'id'
        },
    },
    receiverId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: user,
            key: "id"
        },
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
            type: DataTypes.DATE,
            allowNull: false
        }
},
{
    sequelize,
    modelName: "message",
    tableName: "message",
    timestamps: true
});
   