import user from "../models/user.js";
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

  return await userRepository.createUser(name, email, password);
}

export async function updateUser(userId,  name, email, password ) {
  const upUser = await userRepository.findById(userId);
  if (!upUser) {
    const error = new Error("Usuário não encontrado.");
    error.statusCode = 404;
    throw error;
  }

  if (email && email !== upUser.email) {
    const emailInUse = await userRepository.findByEmail(email);
    if (emailInUse) {
      const error = new Error("E-mail já está em uso.");
      error.statusCode = 409;
      throw error;
    }
  }

  const updateData = {};
  if (name) updateData.name = name;
  if (email) updateData.email = email;
  if (password) updateData.password = password;

  return await userRepository.updateUser(userId, updateData);
}

export async function destroyUser( userId ) {
  const dUser = await userRepository.findById(userId);
  if (!dUser) {
    const error = new Error("Usuário não existe");
    error.statusCode = 404;
    throw error;
  }
  return await userRepository.deleteUser(userId);
}