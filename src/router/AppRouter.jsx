import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import CalendarioElectoralPage from "../pages/Dashboard/Calendario-Electoral";
import GuiaElectorPage from "../pages/Dashboard/Guia-del-Elector"; 
import LugarDeVotacionPage from "../pages/Dashboard/Lugar-de-Votacion"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendario-electoral" element={<CalendarioElectoralPage />} />
        <Route path="/guia-del-elector" element={<GuiaElectorPage />} />
        <Route path="/lugar-de-votacion" element={<LugarDeVotacionPage />} /> 

        {/* fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
