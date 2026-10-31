import * as characterRepository from "../repositories/characterRepository.js"


export async function findAll(){
    return await characterRepository.findAll();
}

export async function findById(characterId){
    return await characterRepository.findById(characterId);
}

export async function createChar(name, userId, sex, hairColor, eyeColor, skinColor){
    return await characterRepository.createChar(name, userId, sex, hairColor, eyeColor, skinColor);
}

export async function updateChar( characterId, name, userId, sex, hairColor, eyeColor, skinColor ){
    const upChar = await findById(characterId);

    if(!upChar){
        const error = new Error("avatar update não existe");
        error.statusCode = 409;
        throw error;
    }

    const updateData = {}

    if (name) updateData.name = name;
    if (userId) updateData.userId= userId;
    if (sex) updateData.sex = sex;
    if (hairColor) updateData.hairColor = hairColor;
    if (eyeColor) updateData.eyeColor = eyeColor;
    if (skinColor) updateData.skinColor = skinColor;

    return await characterRepository.updateChar(characterId, updateData);
}