import prisma from "../db.js";
export const createTodo = async (
  userId: string,
  name: string,
  description: string
) => {
  return await prisma.todo.create({
    data: {
      name: name,
      data: description,
      userId: userId,
    },
  });
};
export const updateTodo = async (
  userId: string,
  name: string,
  description: string
) => {
  return await prisma.todo.update({
    where: { id: userId },
    data: {
      name: name,
      data: description,
    },
  });
};

export const deleteTodo = async (id: string) => {
  return prisma.todo.delete({
    where: {
      id: id,
    },
  });
};
export const showTodo = async (userId: string) => {
  return prisma.todo.findMany({
    where: {
      userId: userId,
    },
  });
};
