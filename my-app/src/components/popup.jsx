import { useState } from "react";
export default function PopUp({ id, func }) {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = async () => {
    fetch("http://localhost:8000/todos", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, data }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("fetch failed", error));
    func();
    setName("");
    setData("");
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop (Click to close) */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-200">
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
      </div>
    </div>
  );
}
