import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import CalendarioElectoralPage from "../pages/Dashboard/Calendario-Electoral";
import GuiaElectorPage from "../pages/Dashboard/Guia-del-Elector"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendario-electoral" element={<CalendarioElectoralPage />} />
        <Route path="/guia-elector" element={<GuiaElectorPage />} />

        {/* fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
