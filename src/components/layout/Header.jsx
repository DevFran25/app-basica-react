import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function Header({ title }) {
  const navigate = useNavigate();

  // Detecta tipos de páginas
  const isGuide = title === "Calendario Electoral - Guía del Elector";
  const isCalendar = title === "Calendario Electoral";

  return (
    <div className="mb-4 w-full">
      {isGuide ? (
        // ==== HEADER PARA GUÍA DEL ELECTOR====
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-200 transition"
          >
            <ChevronLeft size={22} />
          </button>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Calendario Electoral - Guía del Elector
          </h1>
        </div>
      ) : isCalendar ? (
        // ==== HEADER PARA CALENDARIO ELECTORAL ====
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-200 transition"
          >
            <ChevronLeft size={22} />
          </button>

          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Calendario Electoral
          </h1>
        </div>
      ) : (
        // ==== HEADER NORMAL ====
        <div className="flex flex-col items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
            {title}
          </h1>

          <div className="bg-orange-500 text-white rounded-lg shadow px-5 py-2 w-64 sm:w-80 md:w-[1000px] text-center">
            <h2 className="text-sm sm:text-base md:text-lg font-bold">
              ¡Localiza tu mesa y planifica el día!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
