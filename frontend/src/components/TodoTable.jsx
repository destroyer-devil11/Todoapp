import { useEffect, useState } from "react";
import useTodoStore from "../store/todoStore";
import Card from "./Card";
import AddTodo from "./AddTodo";
import UpdateTodoModal from "./popup";
import PopUp from "./popup";
export default function TodoTable() {
  const todos = useTodoStore((state) => state.todos);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const loadTodos = useTodoStore((state) => state.loadTodos);

  const [ifupdate, setIfupdate] = useState();
  const [idtodo, setIdtodo] = useState();

  const handleUpdate = async (id) => {
    setIfupdate(true);
    setIdtodo(id);
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleDelete = async (id) => {
    fetch("http://localhost:8000/todos", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    deleteTodo(id);
  };

  return (
    <>
      {/* Table Section */}
      <div className="w-full max-w-5xl mx-auto mt-12 relative">
        {/* Subtle Glow behind the table */}
        <div className="absolute inset-0 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative overflow-hidden rounded-4xl bg-white/3 border border-white/10 backdrop-blur-3xl shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-8 py-5 text-[11px] font-black text-white/40 uppercase tracking-[0.2em]">
                  Title
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-white/40 uppercase tracking-[0.2em]">
                  Data
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-white/40 uppercase tracking-[0.2em] text-center">
                  Update
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-white/40 uppercase tracking-[0.2em] text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {todos ? (
                todos.map((t) => (
                  <tr
                    key={t.id}
                    className="group hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <td className="px-8 py-5">
                      <span className="text-white font-semibold tracking-tight group-hover:text-purple-300 transition-colors">
                        {t.name}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="max-w-[200px] truncate text-white/50 text-sm font-medium italic">
                        {t.data}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <button
                        className="px-5 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300 transform active:scale-90"
                        onClick={() => handleUpdate(t.id)}
                      >
                        Update
                      </button>
                    </td>

                    <td className="px-8 py-5 text-center">
                      <button
                        className="px-5 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300 transform active:scale-90"
                        onClick={() => handleDelete(t.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>loading...</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Empty State */}
          {todos ? (
            todos.length === 0 && (
              <div className="py-8 text-center">
                <p className="text-white/20 text-sm font-bold uppercase tracking-[0.3em]">
                  No Tasks Available
                </p>
              </div>
            )
          ) : (
            <div className="py-8 text-center">
              <p className="text-white/20 text-sm font-bold uppercase tracking-[0.3em]">
                No Tasks Available(no server)
              </p>
            </div>
          )}
        </div>
      </div>
      {ifupdate && <PopUp id={idtodo} func={loadTodos} />}
    </>
  );
}
