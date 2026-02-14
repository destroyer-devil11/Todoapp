import jwt, { JwtPayload } from "jsonwebtoken";

interface MyJwtPayload extends JwtPayload {
  userId: string;
  email: string;
}

export const verify = (token: string) => {
  return jwt.verify(token, "wallah") as MyJwtPayload;
};
export const createToken = (userid: string) => {
  return jwt.sign({ id: userid }, "wallah", {
    expiresIn: "1h",
  });
};
