// Card.jsx
import useTodoStore from "../store/todoStore";
export default function Card() {
  const { todos } = useTodoStore();
  return (
    <div className="relative overflow-hidden p-10 rounded-[2.5rem] bg-slate-900/60 border border-white/10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center group transition-all duration-500 hover:border-purple-500/40">
      {/* 1. Enhanced Hover Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* 2. Concentric Circles (The "Target" Look) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 rounded-full border border-white/[0.03] scale-100 group-hover:scale-125 transition-transform duration-700"></div>
        <div className="absolute w-32 h-32 rounded-full border border-white/[0.05] scale-100 group-hover:scale-110 transition-transform duration-700"></div>
      </div>

      {/* 3. Title Section - Increased Visibility */}
      <p className="relative z-10 text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2 group-hover:text-purple-300 transition-colors">
        Total Todos
      </p>

      {/* 4. Main Value - Solid White for readability */}
      <div className="relative z-10 flex items-baseline gap-1">
        <h2 className="text-7xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-purple-400 transition-all duration-500 tracking-tighter drop-shadow-2xl">
          {todos ? todos.length : 0}
        </h2>
        {/* Subtle indicator for "items" */}
        <span className="text-xs font-bold text-white/20 uppercase tracking-tighter mb-2">
          tasks
        </span>
      </div>

      {/* 5. Progress Indicator Line */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <div className="w-12 h-[2px] bg-slate-700 rounded-full overflow-hidden transition-all duration-500 group-hover:w-32">
          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-full animate-[shimmer_2s_infinite]"></div>
        </div>
        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          System Overview
        </p>
      </div>

      {/* 6. High-End Rim Light */}
      <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none"></div>
    </div>
  );
}
