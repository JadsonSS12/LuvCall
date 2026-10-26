import user from '../models/user.js';

export async function findAll(){
    return await user.findAll();
}

export async function findById(userId){

    return await user.findByPk(userId);

}

export async function createUser(name, email, password,){

    return await user.create({ name, email, password})

}

export async function findByEmail(email){
    return await user.findOne({ where: { email }})
}


export async function updateUser(userId, updateData) {
    await user.update(updateData, { where: { id: userId } });
    return await findById(userId);
}

export async function deleteUser(userId){
    return await user.destroy({where: {id: userId}});
}