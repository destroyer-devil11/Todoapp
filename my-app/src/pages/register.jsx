import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: " ", password: " " });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const registerUser = async () => {
    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    }).catch((error) => console.error("fetch failed", error));
    const data = await res.text();
    if (!res.ok) {
      alert(data.message);
      return;
    }
    alert("Account created !");
    navigate("/");
  };
  return (
    <div className="relative w-full min-h-screen bg-[#0f172a] flex items-center justify-center overflow-hidden p-6">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-pink-600/10 blur-[120px]"></div>
        <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main Glass Card */}
        <div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl">
          <header className="text-center mb-10">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Create Account
            </h2>
            <p className="text-white/50 mt-2 text-sm">
              Join us to start managing your todos
            </p>
          </header>

          <form className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/60 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@company.com"
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white/10 transition duration-300"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/60 uppercase tracking-wider ml-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Create a strong password"
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white/10 transition duration-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={registerUser}
              className="w-full py-3 mt-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.01] active:scale-95"
            >
              Register
            </button>
          </form>

          {/* Navigation Link */}
          <div className="mt-10 text-center">
            <p className="text-sm text-white/40">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-white hover:text-blue-400 font-semibold transition-colors underline-offset-4 hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
