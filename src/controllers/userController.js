import * as userService from "../services/userService.js";

export async function index(request, reply) {
  try {
    const users = await userService.getAllUsers();
    return reply.status(200).send(users);
  } catch (error) {
    return reply.status(500).send({ error: error.message || "Erro interno do servidor." });
  }
}

export async function show(request, reply) {
  try {
    const { id } = request.params;
    const user = await userService.getUserById(id);
    return reply.status(200).send(user);
  } catch (error) {
    const status = error.statusCode || 500;
    return reply.status(status).send({ error: error.message });
  }
}

export async function store(request, reply) {
  try {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      return reply.status(400).send({ error: "Nome, e-mail e senha são obrigatórios." });
    }

    const createdUser = await userService.createUser({ name, email, password });
    return reply.status(201).send(createdUser);
  } catch (error) {
    return reply.status(500).send({ error: error.message || "Erro ao criar usuário." });
  }
}