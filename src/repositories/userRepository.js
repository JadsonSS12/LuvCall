import user from '../models/user.js';

export async function findAll(){
    return await user.findAll();
}

export async function findById(userId){

    return await user.findByPK({where: {userId}});

}

export async function createUser(name, email, password,){

    return await user.create({ name, email, password})

}

export async function findByEmail(email){
    return await user.findOne({ where: { email }})
}

export async function updateuser(userId, name, email, password){
    return await user.update({name, email, password}, {where : { id: {userId}}});
}

export async function deleteUser(userId){
    return await user.destroy({where: {id: {userId}}});
}