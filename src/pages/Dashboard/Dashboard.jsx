import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Dashboard() {
  const [activeRoute, setActiveRoute] = useState("home");
  const [currentPage, setCurrentPage] = useState("Inicio");

  const handleNavigate = (routeId) => {
    setActiveRoute(routeId);

    const pageNames = {
      home: "Inicio",
      calendar: "Calendario Electoral",
      location: "Mi Lugar de Votación",
      documents: "Documentos",
      menu: "Menú Principal",
      settings: "Configuración",
    };

    setCurrentPage(pageNames[routeId] || "Página");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-cyan-200">
      {/* Sidebar */}
      <div className="ml-0 md:ml-6 lg:ml-8">
        <Sidebar activeRoute={activeRoute} onNavigate={handleNavigate} />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 overflow-auto"></main>
    </div>
  );
}
