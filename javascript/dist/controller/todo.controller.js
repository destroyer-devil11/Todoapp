import * as todoService from "../services/todo.service.js";
export const createTodo = async (req, res) => {
    const { name, data } = req.body;
    let userId = "";
    if (req.user) {
        userId = req.user.id;
    }
    if (userId) {
        const todo = await todoService.createTodo(userId, name, data);
        res.status(201).json(todo);
    }
    else {
        console.log("userid", userId);
    }
};
export const updateTodo = async (req, res) => {
    const { id, name, data } = req.body;
    let userId = "";
    if (req.user) {
        userId = req.user.id;
    }
    if (userId) {
        const todo = await todoService.updateTodo(id, name, data);
        res.status(201).json(todo);
    }
    else {
        console.log("userid", userId);
    }
};
export const deleteTodo = async (req, res) => {
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
    }
    catch (err) {
        console.log(err);
    }
};
export const showTodo = async (req, res) => {
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
//# sourceMappingURL=todo.controller.js.map