import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
    navigate("/");
  }, []);
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Blobs - Consistent with Login/Register */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-2xl text-center px-6 relative">
        {/* Decorative Glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-3xl -z-10 rounded-full"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
          Manage Your Tasks <br />
          <span className="text-white">Effortlessly</span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
          A simple, fast, and secure Todo app built with a modern glassmorphic
          interface. Stay organized in style.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 py-4">
          {/* Glassmorphic Primary Button */}
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg backdrop-blur-md shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Get Started
          </button>

          {/* Transparent Outline Button */}
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-4 rounded-2xl border border-white/10 hover:border-white/40 text-white/70 hover:text-white font-medium text-lg transition-all duration-300"
          >
            Create Account
          </button>
        </div>

        {/* Footer Detail */}
        <div className="mt-16 flex justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold">
            Fast
          </span>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold">
            Secure
          </span>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold">
            Elegant
          </span>
        </div>
      </div>
    </div>
  );
}
