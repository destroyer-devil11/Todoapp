import bcrypt from "bcryptjs";
export const valid = (password, loginUser_password) => {
    return bcrypt.compare(password, loginUser_password);
};
export const hash = (password) => {
    return bcrypt.hash(password, 10);
};
//# sourceMappingURL=encrypt.js.map