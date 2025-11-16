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

export default function Dashboard() {
  const [activeRoute, setActiveRoute] = useState("home");
  const handleNavigate = (routeId) => setActiveRoute(routeId);

  const Header = ({ title }) => (
    <div className="mb-4 w-full flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
          {title}
        </h1>
        <div className="bg-orange-500 text-white rounded-lg shadow-md px-6 py-3 w-72 sm:w-96 md:w-[1100px] text-center">
          <h2 className="text-sm sm:text-base md:text-lg font-bold">
            ¡Localiza tu mesa y planifica el día!
          </h2>
        </div>
      </div>
    </div>
  );

  const CalendarioElectoral = () => {
    const items = [
      { icon: Calendar, text: "Elecciones", badge: "¡NUEVO!" },
      { icon: FileText, text: "Inscripción de candidatos", badge: null },
      { icon: Calendar, text: "Plazos importantes", badge: null },
    ];

    return (
      <div className="bg-cyan-400 rounded-xl p-3 sm:p-4 text-white shadow-md">
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-center">
          Calendario Electoral
        </h2>
        <div className="space-y-1.5">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-2 text-gray-800 flex items-center justify-between hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <item.icon className="text-cyan-500" size={16} />
                <span className="font-medium text-xs sm:text-sm">{item.text}</span>
              </div>
              {item.badge && (
                <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const MiLugarVotacion = () => (
    <div className="bg-blue-900 rounded-xl p-3 sm:p-4 text-white shadow-md">
      <h2 className="text-lg sm:text-xl font-bold mb-3 text-center">
        Mi Lugar de Votación
      </h2>
      <div className="bg-blue-800 rounded-lg p-2 flex items-start space-x-2 mb-2">
        <MapPin size={24} className="flex-shrink-0 text-blue-300" />
        <div>
          <p className="font-semibold text-xs mb-1">Dirección de local</p>
          <p className="text-xs">Av. José Balta 123</p>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span>• Número de Mesa</span>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold transition-colors">
            Ver en mapa
          </button>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span>• Horarios sugeridos</span>
          <button className="bg-white text-blue-900 px-2 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
            Descargar offline
          </button>
        </div>
      </div>
    </div>
  );

  const CandidatosAgrupaciones = () => {
    const sections = [
      { icon: Users, text: "Elecciones Generales" },
      { icon: FileText, text: "Planes de Gobierno por Sector" },
      { icon: Search, text: "Buscar Candidatos / Hojas de Vida" },
      { icon: FileText, text: "Noticias Relacionadas" },
    ];

    return (
      <div className="bg-red-900 rounded-xl p-3 sm:p-4 text-white shadow-md">
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-center">
          Candidatos y Agrupaciones
        </h2>
        <div className="space-y-1">
          {sections.map((section, index) => (
            <button
              key={index}
              className="w-full bg-red-800 hover:bg-red-700 rounded-lg p-2 text-left flex items-center space-x-2 transition-colors text-xs sm:text-sm"
            >
              <section.icon size={16} />
              <span className="font-medium">{section.text}</span>
            </button>
          ))}
          <button className="w-full bg-white text-red-900 hover:bg-gray-100 rounded-lg p-2 text-center font-medium text-xs sm:text-sm transition-colors">
            Comparar Candidatos (hasta 3)
          </button>
        </div>
      </div>
    );
  };

  const NoticiasVerificadas = () => {
    const news = [
      { icon: FileText, text: "Últimas Noticias Oficiales", badge: 3 },
      { icon: FileText, text: "Comunicados importantes", subtitle: "(ONPE/JNE)" },
      { icon: Bell, text: "Alertas y Actualizaciones", badge: null },
      { icon: Archive, text: "Búsqueda de Noticias / Archivo", badge: null },
    ];

    return (
      <div className="bg-blue-900 rounded-xl p-3 sm:p-4 text-white shadow-md">
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-center">
          Noticias Verificadas
        </h2>
        <div className="space-y-1">
          {news.map((item, index) => (
            <button
              key={index}
              className="w-full bg-white hover:bg-gray-50 rounded-lg p-2 text-left flex items-center justify-between transition-colors text-xs sm:text-sm"
            >
              <div className="flex items-center space-x-1">
                <item.icon className="text-gray-600" size={16} />
                <div className="text-gray-800">
                  <span className="font-medium">{item.text}</span>
                  {item.subtitle && (
                    <p className="text-[10px] text-gray-500">{item.subtitle}</p>
                  )}
                </div>
              </div>
              {item.badge && (
                <span className="bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
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
  <div className="flex h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-cyan-200 overflow-auto">
    <Sidebar activeRoute={activeRoute} onNavigate={handleNavigate} />

    <main className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col items-center gap-4">
      {/* Card blanco que envuelve todo el contenido */}
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-6xl p-4 sm:p-6 md:p-8 flex flex-col items-center gap-4">
        <Header title="Inicio" />

        {/* Grid de 2 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
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
