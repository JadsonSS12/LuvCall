import user from "../models/user.js"; // ajuste o caminho se necessário
import * as userRepository from "../repositories/userRepository.js";

export async function getAllUsers() {
  return await userRepository.findAll();
}

export async function getUserById(id) {
  const user = await userRepository.findById(id);
  if (!user) {
    const error = new Error("Usuário não encontrado.");
    error.statusCode = 404;
    throw error;
  }
  return user;
}

export async function createUser({ name, email, password }) {
const existingUser = await userRepository.findByEmail(email);
  if (existingUser) {
    const error = new Error("E-mail já está em uso.");
    error.statusCode = 409;
    throw error;
  }

  // 2. Repassa as variáveis diretamente para o repositório
  return await userRepository.createUser(name, email, password);
}