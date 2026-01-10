import prisma from "../db.js";
import { hash } from "../utils/encrypt.js";
export const registerUser = async (email, password) => {
    const hashedPassword = await hash(password);
    return await prisma.user.create({
        data: {
            email: email,
            password: hashedPassword,
        },
    });
};
export const loginUser = async (email) => {
    return await prisma.user.findFirst({
        where: {
            email: email,
        },
    });
};
//# sourceMappingURL=user.service.js.map