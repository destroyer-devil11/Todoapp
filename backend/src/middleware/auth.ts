import { verify } from "../utils/verify_jwt.js";
import { Request, Response, NextFunction } from "express";
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  {
    const token = req.cookies.token;
    try {
      const decoded = verify(token);
      (req as any).user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ error: "Invalid Error" });
    }
  }
}
