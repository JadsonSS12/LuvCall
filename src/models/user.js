import uuidv4 from 'uuid';

export default class User{
    constructor(nome, email, senha, id){
        this.nome = nome,
        this.email = email,
        this.senha = senha,
        this.id = uuidv4()
    }
}