import jwt from "jsonwebtoken";
export const verify = (token) => {
    return jwt.verify(token, "wallah");
};
export const createToken = (userid) => {
    return jwt.sign({ id: userid }, "wallah", {
        expiresIn: "1h",
    });
};
//# sourceMappingURL=verify_jwt.js.map