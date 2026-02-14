import { create } from "zustand";
const useTodoStore = create((set) => ({
  todos: [],
  loading: false,
  setTodos: (todos) => set({ todos }),
  loadTodos: async () => {
    set({ loading: true });
    const res = await fetch("http://localhost:8000/todos", {
      credentials: "include",
    });
    const data = await res.json();
    if (res.ok) set({ todos: data, loading: false });
    else set({ todod: [], loading: false });
  },
  addTodo: async (todo) => {
    const res = await fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
      credentials: "include",
    });
    const newTodo = await res.json();
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
  updateTodo: (id, updatedFields) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo
      ),
    }));
  },
  deleteTodo: async (id) => {
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) }));
  },
}));
export default useTodoStore;
