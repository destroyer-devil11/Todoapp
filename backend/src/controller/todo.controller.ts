import { error } from "console";
import * as todoService from "../services/todo.service.js";
import { Request, Response } from "express";
export const createTodo = async (req: Request, res: Response) => {
  const { name, data } = req.body;
  let userId = "";
  if (req.user) {
    userId = req.user.id;
  }
  if (userId) {
    const todo = await todoService.createTodo(userId, name, data);
    res.status(201).json(todo);
  } else {
    console.log("userid", userId);
  }
};
export const updateTodo = async (req: Request, res: Response) => {
  const { id, name, data } = req.body;
  let userId = "";
  if (req.user) {
    userId = req.user.id;
  }
  if (userId) {
    const todo = await todoService.updateTodo(id, name, data);
    res.status(201).json(todo);
  } else {
    console.log("userid", userId);
  }
};
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const result = await todoService.deleteTodo(id);
    let userId = "";
    if (req.user) {
      userId = req.user.id;
    }
    const todo = await todoService.showTodo(userId);
    if (!todo) {
      res.status(500).json({ error: "todo not present" });
    }
    res.status(201).json(todo);
  } catch (err) {
    console.log(err);
  }
};
export const showTodo = async (req: Request, res: Response) => {
  let userId = "";
  if (req.user) {
    userId = req.user.id;
  }
  const todo = await todoService.showTodo(userId);
  if (!todo) {
    res.status(500).json({ error: "todo not present" });
  }
  res.status(201).json(todo);
};
