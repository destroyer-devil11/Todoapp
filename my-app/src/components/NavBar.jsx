import { Link, useNavigate } from "react-router";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = async () => {
    await fetch("http://localhost:8000/logout", {
      method: "POST",
      credentials: "include",
    }).catch((error) => console.error("fetch failed", error));
    navigate("/");
  };
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl px-6 py-3 flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        {/* Logo / Brand with animated gradient */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xs">T</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
            TodoApp
          </h2>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            to="/"
            className="text-white/60 hover:text-white transition-all duration-200 text-sm font-medium hidden sm:block"
          >
            Home
          </Link>

          {!token ? (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-white/60 hover:text-white transition-all duration-200 text-sm font-medium px-3 py-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-xl backdrop-blur-sm transition-all duration-300 active:scale-95 text-sm font-bold shadow-lg"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/dashboard"
                className="text-white/60 hover:text-white transition-all duration-200 text-sm font-medium px-3 py-2"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 px-5 py-2 rounded-xl backdrop-blur-sm transition-all duration-300 active:scale-95 text-sm font-bold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
