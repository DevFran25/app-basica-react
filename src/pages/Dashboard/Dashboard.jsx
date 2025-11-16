import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import { ChevronRight } from "lucide-react";
import {
  Calendar,
  FileText,
  Users,
  Search,
  Bell,
  Archive,
  MapPin,
  InfoIcon,
  Menu,
  X,
} from "lucide-react";

import Header from "@/components/layout/Header";
import DashboardCard from "@/components/ui/DashboardCard";

export default function Dashboard() {
  const [activeRoute, setActiveRoute] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const navigate = useNavigate()
  const handleNavigate = (routeId) => setActiveRoute(routeId);

  const CalendarioElectoral = () => {
    const items = [
      { icon: Calendar, text: "Elecciones", badge: "¡NUEVO!", route: "/Calendario-Electoral" },
      { icon: FileText, text: "Inscripción de candidatos",  route: "/Calendario-Electoral" },
      { icon: Calendar, text: "Plazos importantes",  route: "/Calendario-Electoral" },
      { icon: InfoIcon, text: "Guía del Lector",  route: "/Guia-del-Elector" },
    ];

    return (
    <DashboardCard   title={<span className="text-white">Calendario Electoral</span>}  bg="#3BB9CE">
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => item.route && navigate(item.route)}
            className={`bg-white text-gray-800 rounded-lg p-2 flex items-center justify-between text-sm cursor-pointer 
              ${item.route ? "hover:bg-gray-100" : ""}`}
          >
            <div className="flex items-center space-x-2">
              <item.icon className="text-cyan-500" size={16} />
              <span>{item.text}</span>
            </div>

            {item.badge && (
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </DashboardCard>
    );
  };


const MiLugarVotacion = () => (
  <DashboardCard
  >
    {/* Contenedor del título + botón */}
    <div className="flex items-center justify-between mb-3">
      <h3 className="font-semibold text-lg">Mi Lugar de Votación</h3>
      <button
        onClick={() => navigate("/lugar-de-votacion")}
        className="bg-white text-blue-900 py-1 px-2 rounded-lg flex items-center justify-center font-semibold hover:bg-gray-100 transition w-fit"
      >
        <ChevronRight size={18} />
      </button>
    </div>

    <div className="bg-[#115691] rounded-lg p-3 flex items-start space-x-3 mb-2 text-sm">
      <MapPin size={20} className="text-blue-300 shrink-0" />
      <div>
        <p className="font-semibold mb-1">Dirección:</p>
        <p>Av. José Balta 123</p>
      </div>
    </div>

    <div className="space-y-1.5">
      <div className="bg-[#115691] rounded-lg flex items-center justify-between px-3 py-2 text-sm">
        <span>• Número de Mesa</span>
        <button className="bg-[#003366] text-white px-2 py-1 rounded font-semibold hover:bg-blue-800 transition-colors">
          Ver mapa
        </button>
      </div>

      <div className="bg-[#115691] rounded-lg flex items-center justify-between px-3 py-2 text-sm">
        <span>• Horarios</span>
        <button className="bg-white text-blue-900 px-2 py-1 rounded font-semibold hover:bg-gray-100 transition-colors">
          Descargar
        </button>
      </div>
    </div>
  </DashboardCard>
);



  const CandidatosAgrupaciones = () => {
    const sections = [
      { icon: Users, text: "Elecciones" },
      { icon: FileText, text: "Planes" },
      { icon: Search, text: "Buscar Candidatos" },
      { icon: FileText, text: "Noticias" },
    ];

    return (
      <DashboardCard   title={<span className="text-white">Candidatos y Agrupaciones</span>}  bg="#89373B">
        <div className="space-y-1.5">
          {sections.map((s, i) => (
            <button key={i} className="w-full flex items-center space-x-2 text-sm bg-[#89373B] rounded-lg p-2">
              <s.icon size={16} />
              <span>{s.text}</span>
            </button>
          ))}
          <button className="w-full bg-white text-red-900 rounded-lg p-2 text-center text-sm">Comparar</button>
        </div>
      </DashboardCard>
    );
  };

  const NoticiasVerificadas = () => {
    const news = [
      { icon: FileText, text: "Últimas Noticias", badge: 3 },
      { icon: FileText, text: "Comunicados", subtitle: "(ONPE/JNE)" },
      { icon: Bell, text: "Alertas" },
      { icon: Archive, text: "Archivo" },
    ];

    return (
      <DashboardCard   title={<span className="text-white">Noticias Verificadas</span>}  bg="#003366">
        <div className="space-y-1.5">
          {news.map((item, i) => (
            <button key={i} className="w-full bg-white rounded-lg p-2 flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <item.icon size={16} className="text-gray-600" />
                <div className="text-gray-800">
                  <span>{item.text}</span>
                  {item.subtitle && <p className="text-xs text-gray-500">{item.subtitle}</p>}
                </div>
              </div>
              {item.badge && <span className="bg-orange-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">{item.badge}</span>}
            </button>
          ))}
        </div>
      </DashboardCard>
    );
  };

  return (
    <div className="flex min-h-screen bg-[#C4D2E0]">

      <div className={`fixed inset-y-0 left-0 z-20 transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <Sidebar activeRoute={activeRoute} onNavigate={handleNavigate} className="h-full w-44" />
      </div>

      <button
        className="md:hidden fixed top-2 left-2 z-30 bg-white p-1 rounded shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <main className="flex-1 flex items-center justify-center p-3 md:p-6">
        <div className="bg-white rounded-3xl shadow-lg w-full max-w-5xl p-4 sm:p-5 flex flex-col items-center gap-3">
          <Header title="INICIO" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            <CalendarioElectoral />
            <MiLugarVotacion />
            <CandidatosAgrupaciones />
            <NoticiasVerificadas />
          </div>
        </div>
      </main>
    </div>
  );
}
