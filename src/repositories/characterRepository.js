import character from "../models/character.js"

export async function findAll(){
    return await character.findAll();
}

export async function findById(characterId){
    return await character.findByPk(characterId)
}

export async function createChar(name, userId, sex, hairColor, eyeColor, skinColor){
    return await character.create(name, userId, sex, hairColor, eyeColor, skinColor);
}

export async function updateChar(charId, updateData){
    await character.update(updateData, {where: { id: charId}});
    return character
}

export async function deleteChar(charId){
    return await character.destroy( { where: { id: charId} } );
}