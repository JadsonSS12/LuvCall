import * as notificationService from "../services/notificationService.js"

export async function index(request, reply){
    try{
        const noti = await notificationService.findAll();
        return reply.status(200).send(noti);
    }catch(error){
        return reply.status(400).send( "erro ao listar notificacoes1");
    }
}

export async function store(request, reply){
    try{
        const {id} = request.params;
        const noti = await notificationService.findById(id);
        return reply.status(200).send(noti);
    }catch(error){
        return reply.status(500).send("erro ao procurar notification");
    }
}

export async function create(request, reply){
    try {
        const {title, content, date, receiverId} = request.body;

        if (!title || !content || !date || !receiverId){
            return reply.status(404).send("atributos não podem ser vazios");
        }
        console.log("não passou o user");
        const notification = await notificationService.createNotification(title, content, date, receiverId);
        console.log("passou o user");
        return reply.status(201).send(notification);
        
    }catch(error){
        return reply.status(500).send("erro create controller notification");
    }
}

export async function update(request, reply){
    try{
        const {id} = request.params;
        const {title, content, date, receiverId} = request.body;

        if(!id){
            return reply.status(500).send("id notification update controller não existe");
        }
        const notification = await notificationService.updateNotification(id, title, content, date, receiverId);
        return reply.status(203).send(notification);
    }catch(error){
        return reply.status(500).send({error: error.message || "erro update notification controller update"});
    }
}

export async function destroy(request, reply){
    try{
        const {id} = request.params;
        if(!id){
            return reply.status(500).send("id notification delete controller não existe");
        }
        const notification = await notificationService.deleteNotification(id);
        return reply.status(204).send(notification);
    }catch(error){
        return reply.status(504).send({error: error.message || "erro delete notification controller"});
    }
}