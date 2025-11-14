import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Navegación */}
      <nav className="p-4 flex gap-4 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
