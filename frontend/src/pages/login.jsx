import { useState } from "react";
import { Link, useNavigate } from "react-router";
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    console.log("loginuser");
    try {
      await fetch("http://localhost:8000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).catch((error) => console.error("fetch failed", error));
      navigate("/dashboard");
    } catch (err) {
      console.error("fetch error", err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden relative p-6">
      {/* The Background Glows - Shared across all pages for consistency */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative group w-full max-w-md">
        {/* Radial gradient glow directly behind the card */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl -z-10 group-hover:opacity-75 transition-opacity duration-500"></div>

        <div className="relative p-8 md:p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
          <header className="text-center mb-10">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-white/40 mt-2 text-sm">
              Please enter your credentials to log in
            </p>
          </header>

          <form className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="name@company.com"
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:bg-white/10 transition duration-300"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider ml-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:bg-white/10 transition duration-300"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={loginUser}
              className="w-full py-3 mt-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
            >
              Sign In
            </button>
          </form>

          {/* Navigation Paragraph */}
          <p className="mt-10 text-center text-sm text-white/40">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-white hover:text-purple-400 font-semibold transition-colors decoration-purple-500/50 underline-offset-4 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
