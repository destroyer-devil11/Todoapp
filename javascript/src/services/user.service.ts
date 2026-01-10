import prisma from "../db.js";
import { hash } from "../utils/encrypt.js";
export const registerUser = async (email: string, password: string) => {
  const hashedPassword = await hash(password);
  return await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
    },
  });
};
export const loginUser = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
};
