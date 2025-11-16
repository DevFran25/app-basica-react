import { useState } from "react";
import { UserCheck, BookOpen, Users, Timer } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";


export default function CalendarioElectoralPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sections = [
    {
      title: "SEPTIEMBRE 2025",
      items: [
        {
          icon: UserCheck,
          title: "Elecciones Generales",
          date: "Domingo, 14 de septiembre",
          badge: "¡NUEVO!",
        },
      ],
    },
    {
      title: "OCTUBRE 2025",
      items: [
        {
          icon: BookOpen,
          title: "Cierre Padrón Electoral",
          date: "Viernes, 31 de Octubre",
          hourglass: true,
        },
      ],
    },
    {
      title: "NOVIEMBRE 2025",
      items: [
        {
          icon: Users,
          title: "Inicio Inscripción Candidatos",
          date: "Sábado, 01 de Noviembre",
          hourglass: true,
        },
        {
          icon: Timer,
          title: "Plazo Máx. Presentación Tachas",
          date: "Martes, 25 de Noviembre",
          hourglass: true,
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-linear-to-br from-blue-200 via-blue-300 to-cyan-200">

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <Sidebar className="h-full w-44" />
      </div>

      {/* Main */}
      <main className="flex-1 p-4 md:p-6 flex justify-center">
        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-5">

          {/* Header - ahora ya NO tiene botón duplicado */}
          <Header title="Calendario Electoral" />

          {/* Sections */}
          <div className="mt-4 space-y-6">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-blue-900 font-bold text-sm mb-3">
                  {section.title}
                </h2>

                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="border border-cyan-300 bg-white rounded-xl p-3 flex justify-between items-center shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="text-cyan-600" size={30} />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {item.title}
                          </p>
                          <p className="text-gray-500 text-xs">{item.date}</p>
                        </div>
                      </div>

                      {item.badge && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-lg font-bold">
                          {item.badge}
                        </span>
                      )}

                      {item.hourglass && (
                        <Timer className="text-cyan-600" size={18} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
