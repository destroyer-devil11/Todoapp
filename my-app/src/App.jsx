import Navbar from "./components/NavBar";
import Dashboard from "./Dashboard";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router";
import { ProtectedRoute } from "./utils/authRoute";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
