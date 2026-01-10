import TodoTable from "./components/TodoTable";
import Card from "./components/Card";
import AddTodo from "./components/AddTodo";
import { ProtectedRoute } from "./utils/authRoute";
import { Navigate } from "react-router";
export default function Dashboard() {
  return (
    <div className="relative w-full min-h-screen bg-[#0b0f1a] flex flex-col items-center pt-20 pb-12 px-6 overflow-hidden text-white selection:bg-purple-500/30">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-150 h-150 rounded-full bg-purple-600/20 blur-[130px]"></div>
        <div className="absolute bottom-0 right-[-5%] w-125 h-125 rounded-full bg-blue-600/15 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-7xl">
        {/* 1. Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
              Dashboard
            </h1>
            <p className="text-slate-400 text-xl font-medium">
              Manage your{" "}
              <span className="text-purple-400">daily objectives</span>.
            </p>
          </div>

          {/* Status Pill */}
          <div className="px-6 py-3 rounded-2xl bg-slate-900 border border-white/20 shadow-2xl flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Status
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
                <span className="text-sm font-bold text-emerald-400">
                  Live Sync
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Main Grid Layout (Left Sidebar, Right Table) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* SIDEBAR: Actions & Stats (4 columns) */}
          <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            {/* Total Stats Card */}
            <div className="w-full group">
              <Card />
            </div>

            {/* Add Todo Form Section */}
            <div className="relative p-px rounded-[2.5rem] bg-gradient-to-b from-white/20 to-transparent shadow-2xl">
              <div className="bg-slate-900/90 backdrop-blur-3xl p-8 rounded-[2.4rem] border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                  <h3 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">
                    New Task
                  </h3>
                </div>

                {/* The AddTodo component is kept here for easy access */}
                <AddTodo />
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT: The List (8 columns) */}
          <main className="lg:col-span-8 order-1 lg:order-2">
            <div className="relative p-px rounded-[2.5rem] bg-linear-to-br from-white/30 via-white/5 to-white/10 shadow-2xl">
              <div className="w-full p-2 rounded-[39px] bg-slate-900/95 border border-white/10">
                <div className="bg-[#1e293b]/40 rounded-[35px] overflow-hidden border border-white/5 min-h-[600px]">
                  {/* Table Toolbar / Heading */}
                  <div className="px-8 py-5 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        Active Pipeline
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
                      {0} Items
                    </span>
                  </div>

                  {/* The actual table component */}
                  <TodoTable />
                </div>
              </div>
            </div>

            {/* Workspace Footer */}
            <div className="mt-8 flex justify-between items-center px-6 opacity-40">
              <p className="text-[10px] font-black uppercase tracking-[0.4em]">
                Workspace v1.0.4
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Secure Node
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
