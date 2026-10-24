import { DataTypes, Model } from "sequelize";
import user from "./user";
import * as CharSettings from "./enum/charSettings.js"

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
    },
    sex: {
        type: DataTypes.ENUM(...Object.values(CharSettings.sex)),
        allowNull: false,
        defaultValue: CharSettings.sex.F,
    },
    hairColor: {
        type: DataTypes.ENUM(...Object.values(CharSettings.hairColor)),
        allowNull: false,
        defaultValue: CharSettings.hairColor.BLACK,
    },
    eyeColor: {
        type: DataTypes.ENUM(...Object.values(CharSettings.eyeColor)),
        allowNull: false,
        defaultValue: CharSettings.eyeColor.BLACK,
    },
    skinColor: {
        type: DataTypes.ENUM(...Object.values(CharSettings.skinColor)),
        allowNull: false,
        defaultValue: CharSettings.skinColor.BROWN,
    }
},{
    sequelize,
    modelName: 'character',
    tableName: 'character',
    timestamps: false
})