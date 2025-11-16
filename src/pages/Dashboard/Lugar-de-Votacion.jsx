import { useState } from "react";
import { ChevronLeft, MapPin, Clock, Map, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Sidebar from "@/components/layout/Sidebar";
import DashboardCard from "@/components/ui/DashboardCard";
import MiniMapa from "@/assets/images/mapa.png";


export default function LugarDeVotacionPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
     <div className="flex min-h-screen bg-[#C4D2E0]">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar className="h-full w-44" />
      </div>

      {/* Main */}
    <main className="flex-1 pt-1 px-4 md:px-6 md:pt-2 flex justify-center">
        <div className="p-4 pt-1 max-w-5xl mx-auto w-full">

          {/* Todo dentro del DashboardCard */}
          <DashboardCard  bg="#FFFFFF">
          

          {/* Header */}
            <div className="flex items-center gap-3 mb-3 mt-2">
            <button
                onClick={() => navigate(-1)}
                className="p-2 rounded hover:bg-gray-100 text-black"
            >
                <ChevronLeft size={26} />
            </button>
            <h1 className="text-lg sm:text-xl font-bold text-black">
                Mi Lugar de Votación
            </h1>
            </div>


            {/* Card principal */}
            <div className="rounded-xl border shadow overflow-hidden">

              {/* Barra azul */}
              <div className="bg-[#0A3A75] text-white p-4 flex items-center gap-3">
                <img
                  src={MiniMapa}
                  alt="Local"
                  className="w-12 h-12 rounded-md object-cover"
                />
                <h2 className="text-lg font-semibold">Mi Lugar de Votación</h2>
              </div>

              {/* Contenido principal */}
              <div className="p-4 bg-white">
                {/* Dirección */}
                <h3 className="font-bold text-gray-800 mb-1">Dirección del local</h3>
                <p className="text-gray-700 text-sm leading-tight">
                  I.E. 11015 Comandante Elías Aguirre
                  <br />
                  Av. Balta 862
                </p>

                {/* Botón mapa + toggle */}
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow font-semibold hover:bg-orange-600">
                    Cómo llegar con mapa
                  </button>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Guardar para offline</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Mesa de votación */}
            <div className="bg-white border rounded-xl shadow p-4 mt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Map size={30} className="text-blue-700" />
                  <div>
                    <h3 className="font-semibold">Tu mesa de votación</h3>
                    <p className="text-sm text-gray-600">Número: L15</p>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                  Ver ubicación exacta
                  <MapPin size={20} />
                </button>
              </div>
            </div>

            {/* Horarios sugeridos */}
            <div className="bg-white border rounded-xl shadow p-4 mt-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={28} className="text-blue-700" />
                <h3 className="font-semibold text-gray-800 text-lg">Horarios sugeridos</h3>
              </div>

              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  • <strong>7:00 AM - 9:00 AM:</strong> Prioridad Adultos Mayores y P. con Discapacidad
                </li>
                <li>
                  • <strong>9:01 AM - 1:00 PM:</strong> Horario General (Menor Congestión Esperada)
                </li>
                <li>
                  • <strong>1:01 PM - 4:00 PM:</strong> Horario General (Puede haber mayor afluencia)
                </li>
                <li>
                  • <strong>4:01 PM - 5:00 PM:</strong> Última Hora Recomendada
                </li>
              </ul>

              <button className="mt-14 w-full border border-blue-700 text-blue-700 py-2 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-blue-50">
            <Download size={18} />
            Descargar toda la información para offline
            <span className="text-green-600">✔</span>
            </button>
            </div>

          </DashboardCard>
        </div>
      </main>
    </div>
  );
}
