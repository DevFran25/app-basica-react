import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import {
  Calendar,
  FileText,
  Users,
  Search,
  Bell,
  Archive,
  MapPin,
} from "lucide-react";

// ==================== DASHBOARD PAGE ====================
export default function Dashboard() {
  const [activeRoute, setActiveRoute] = useState("home");

  const handleNavigate = (routeId) => {
    setActiveRoute(routeId);
  };

  // ======== HEADER ========
  const Header = ({ title }) => (
    <div className="mb-5">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
        {title}
      </h1>
      <div className="bg-orange-500 text-white px-5 py-3 rounded-xl text-center shadow-md">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          ¡Localiza tu mesa y planifica el día!
        </h2>
      </div>
    </div>
  );

  // ======== CALENDARIO ELECTORAL ========
  const CalendarioElectoral = () => {
    const items = [
      { icon: Calendar, text: "Elecciones", badge: "¡NUEVO!" },
      { icon: FileText, text: "Inscripción de candidatos", badge: null },
      { icon: Calendar, text: "Plazos importantes", badge: null },
    ];

    return (
      <div className="bg-cyan-400 rounded-2xl p-4 sm:p-5 text-white shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Calendario Electoral
        </h2>
        <div className="space-y-2.5">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-3 text-gray-800 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <item.icon className="text-cyan-500" size={19} />
                <span className="font-medium text-sm">{item.text}</span>
              </div>
              {item.badge && (
                <span className="bg-orange-500 text-white text-xs px-2.5 py-1 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ======== MI LUGAR DE VOTACIÓN ========
  const MiLugarVotacion = () => (
    <div className="bg-blue-900 rounded-2xl p-4 sm:p-5 text-white shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Mi Lugar de Votación
      </h2>
      <div className="bg-blue-800 rounded-lg p-3 flex items-start space-x-2 mb-3">
        <MapPin size={28} className="flex-shrink-0 text-blue-300" />
        <div>
          <p className="font-semibold text-sm mb-1">Dirección de local</p>
          <p className="text-sm">Av. José Balta 123</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span>• Número de Mesa</span>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">
            Ver en mapa
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>• Horarios sugeridos</span>
          <button className="bg-white text-blue-900 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-colors">
            Descargar para offline
          </button>
        </div>
      </div>
    </div>
  );

  // ======== CANDIDATOS Y AGRUPACIONES ========
  const CandidatosAgrupaciones = () => {
    const sections = [
      { icon: Users, text: "Elecciones Generales" },
      { icon: FileText, text: "Planes de Gobierno por Sector" },
      { icon: Search, text: "Buscar Candidatos / Hojas de Vida" },
      { icon: FileText, text: "Noticias Relacionadas" },
    ];

    return (
      <div className="bg-red-900 rounded-2xl p-4 sm:p-5 text-white shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Candidatos y Agrupaciones
        </h2>
        <div className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={index}
              className="w-full bg-red-800 hover:bg-red-700 rounded-lg p-3 text-left flex items-center space-x-2 transition-colors"
            >
              <section.icon size={19} />
              <span className="font-medium text-sm">{section.text}</span>
            </button>
          ))}
          <button className="w-full bg-white text-red-900 hover:bg-gray-100 rounded-lg p-3 text-center font-medium text-sm transition-colors">
            Comparar Candidatos (hasta 3)
          </button>
        </div>
      </div>
    );
  };

  // ======== NOTICIAS VERIFICADAS ========
  const NoticiasVerificadas = () => {
    const news = [
      { icon: FileText, text: "Últimas Noticias Oficiales", badge: 3 },
      {
        icon: FileText,
        text: "Comunicados importantes",
        subtitle: "(ONPE/JNE)",
      },
      { icon: Bell, text: "Alertas y Actualizaciones", badge: null },
      { icon: Archive, text: "Búsqueda de Noticias / Archivo", badge: null },
    ];

    return (
      <div className="bg-blue-900 rounded-2xl p-4 sm:p-5 text-white shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Noticias Verificadas
        </h2>
        <div className="space-y-2">
          {news.map((item, index) => (
            <button
              key={index}
              className="w-full bg-white hover:bg-gray-50 rounded-lg p-3 text-left flex items-center justify-between transition-colors"
            >
              <div className="flex items-center space-x-2">
                <item.icon className="text-gray-600" size={19} />
                <div className="text-gray-800">
                  <span className="font-medium text-sm block">{item.text}</span>
                  {item.subtitle && (
                    <p className="text-xs text-gray-500">{item.subtitle}</p>
                  )}
                </div>
              </div>
              {item.badge && (
                <span className="bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeRoute={activeRoute} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-6 md:p-7 w-full h-full">
          <Header title="Inicio" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
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
