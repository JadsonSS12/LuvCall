import * as characterService from "../services/characterService.js"

export async function index(request, reply){
    const all =  await characterService.findAll();
    return reply.status(200).send(all);
}

export async function show(request, reply){
    const {id}  = request.params;

    if(!id){
        return reply.status(404).send("função show controller character id não encontrado");
    }

    const char = await characterService.findById(id);

    return reply.status(200).send(char);
}

export async function create(request, reply){
    const {name, userId, sex, hairColor, eyeColor, skinColor} = request.body;

    if(!name || !userId || !sex || !hairColor || !eyeColor || !skinColor){
        return reply.status(500).send({ error: error.message || "create atributes nulos"});

    }

    const char = await characterService.createChar(name, userId, sex, hairColor, eyeColor, skinColor);
    return reply.status(201).send(char);
}

export async function update(request, reply){
    try{
        const {id} = request.params;
        const {name, userId, sex, hairColor, eyeColor, skinColor} = request.body;

        if(!id){
            return reply.status(404).send("este character não existe");
        }

        const char = await characterService.updateChar(id, name, userId, sex, hairColor, eyeColor, skinColor);
        return reply.status(201).send(char);
    }catch(error){
        return reply.status(500).send("deu erro em update controller character");
    }
}

export async function destroy(request, reply){
    try{
        const {id} = request.params;

        if(!id){
            return reply.status(404).send("este character não existe");
        }

        const dChar = await characterService.deleteChar(id);
        return reply.status(204).send(dChar);
    
    }catch(error){
        return reply.status(504).send("erro ao deletar em destroy char");
    }
}