import * as userService from "../services/user.service.js";
import { Request, Response } from "express";
import { valid } from "../utils/encrypt.js";
import { createToken, verify } from "../utils/verify_jwt.js";
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email) {
    const user = await userService.loginUser(email);
    if (!user) return res.status(401);
    const isvalid = await valid(password, user.password);
    if (!valid) return res.status(400).json({ error: "Incorrect password" });
    const token = createToken(user.id);
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 3600000,
      })
      .status(200);
    return res.json({ message: "Logged in" });
  } else {
    return res.status(400).json({ error: "no email" });
  }
};
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "fields missing" });
  }
  try {
    const user = await userService.registerUser(email, password);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "user not created" });
  }
};
export const logOut = async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 3600000,
  });
  res.status(200).json({ message: "Logged Out succesfully" });
};
export const authCheck = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  try {
    const user = verify(token);
    return res.status(200).json({ isAuthenticated: true, user });
  } catch {
    return res.status(401).json({ isAuthenticated: false, user: null });
  }
};
