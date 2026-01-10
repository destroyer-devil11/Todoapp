import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import useTodoStore from "../store/todoStore";
export default function AddTodo() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const { addTodo } = useTodoStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo({ name: name, data: data });
    setName("");
    setData("");
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-white/90 px-1">New Task</h2>

        {/* Task Name */}
        <div className="space-y-1.5">
          <input
            name="name"
            type="text"
            placeholder="Task title..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:bg-white/10 transition duration-300"
            required
          />
        </div>

        {/* Details */}
        <div className="space-y-1.5">
          <textarea
            name="data"
            placeholder="Describe the task..."
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-full h-28 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:bg-white/10 transition duration-300 resize-none text-sm"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 border border-white/10 text-white font-bold rounded-xl shadow-xl transition-all duration-300 transform active:scale-[0.98]"
        >
          Add to List
        </button>
      </div>
    </form>
  );
}
