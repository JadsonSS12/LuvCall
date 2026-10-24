import { DataTypes, Model } from "sequelize";
import user from "./user";

export default class character extends Model{}

character.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: user,
            key: 'id',
        }
    }
},{
    sequelize,
    modelName: 'character',
    tableName: 'character',
    timestamps: false
})