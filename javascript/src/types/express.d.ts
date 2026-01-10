import { User } from "../generated/client.ts";
declare global {
  namespace Express {
    interface Request {
      user?: Pick<User, "id">;
    }
  }
}
export {};
