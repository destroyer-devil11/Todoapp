import bcrypt from "bcryptjs";
export const valid = (password: string, loginUser_password: string) => {
  return bcrypt.compare(password, loginUser_password);
};
export const hash = (password: string) => {
  return bcrypt.hash(password, 10);
};
