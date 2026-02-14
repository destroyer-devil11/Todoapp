import prisma_client from "./db.js";
import express from "express";
import { authMiddleware } from "./middleware/auth.js";
import {
  showTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} from "./controller/todo.controller.js";
import cookieParser from "cookie-parser";
import {
  authCheck,
  loginUser,
  logOut,
  registerUser,
} from "./controller/user.controller.js";
import cors from "cors";
const app = express();

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.static("public"));
app.get("/todos", authMiddleware, showTodo);
app.post("/todos", authMiddleware, createTodo);
app.post("/register", registerUser);
app.post("/login", loginUser);
app.delete("/todos", deleteTodo);
app.post("/logout", logOut);
app.put("/todos", authMiddleware, updateTodo);
app.get("/auth/check", authCheck);
app.listen(8000, () => {
  console.log("server running");
});
