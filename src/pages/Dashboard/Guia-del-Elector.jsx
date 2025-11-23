import { useState } from "react";
import { ChevronLeft, FileText, AlertTriangle, ThumbsUp, BookOpen, MapPin, HelpCircle } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header"
import DashboardCard from "@/components/ui/DashboardCard";
import lector from "@/assets/images/lector.png";
import HamburgerButton from "@/components/ui/HamburgerButton";


export default function GuiaLectorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pasos = [
    { icon: FileText, title: "Paso 1: ¿Cómo usar la cédula?" },
    { icon: AlertTriangle, title: "Paso 2: ¿Qué NO hacer? (Voto nulo/blanco)" },
    { icon: ThumbsUp, title: "Paso 3: Recomendaciones para el sufragio" },
    { icon: BookOpen, title: "Paso 4: Normas Importantes" },
    { icon: HelpCircle, title: "Paso 5: Guía para Primerizos" },
    { icon: MapPin, title: "Paso 6: ¿Cómo ubicar tu mesa y local?" },
    { icon: FileText, title: "Paso 7: El proceso de sufragio" },
    { icon: AlertTriangle, title: "Paso 8: ¿Qué hacer después de votar?" },
  ];

  const faqs = [
    { question: "¿Puedo votar si mi DNI está vencido?", answer: "Sí, puedes votar aun si tu DNI está vencido." },
    { question: "¿Qué debo llevar el día de mi votación?", answer: "Solo tu DNI. No es necesario llevar ningún otro documento." },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

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
    
      
      {/* Botón hamburguesa */}
      <HamburgerButton
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main */}
      <main className="flex-1 p-4 md:p-6 flex justify-center">
        <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg p-5 flex flex-col items-center">
            {/* Header */}
            <Header title="Calendario Electoral - Guía del Elector" />
          

          {/* DashboardCard envuelve toda la guía */}
          <DashboardCard title={<span className="text-white"></span>} bg="transparent">
            <div className="mt-3 space-y-6">

              {/* Contenido superior */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-10">

                {/* Card azul */}
                <div className="bg-blue-200 border border-blue-200 rounded-xl p-2 shadow-lg flex items-center justify-center">
                  <div className="flex flex-col">
                    <div className="bg-[#115691] text-white p-6 rounded-t-2xl">
                      <h3 className="text-lg font-semibold text-center">Guía del Elector Paso a paso</h3>
                      <p className="text-center">Descripción del primer paso…</p>
                    </div>
                    <div className="bg-gray-100 text-black p-6 rounded-b-2xl">
                      <p className="text-center">Tu guía completa para un voto informado. Descubre el proceso electoral,
                        cómo votar y usar tu cédula.
                      </p>
                      <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600">
                        Empezar Guía
                      </button>
                    </div>
                  </div>
                </div>

                {/* Imagen */}
                <div className="bg-blue-200 border border-blue-200 rounded-xl p-3 shadow-lg flex flex-col items-center justify-center">
                  <img src={lector} className="w-56 h-auto rounded-lg" />
                  <span className="bg-orange-500 text-white text-xs px-3 py-1 mt-3 rounded-lg font-bold">¡NUEVO!</span>
                </div>

              </div>

              {/* Pasos */}
              <h2 className="mt-8 text-lg font-bold text-black">Pasos Clave Guía</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                {pasos.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg border-2 border-blue-400 bg-blue-50 hover:shadow cursor-pointer">
                    <item.icon className="text-blue-700" size={22} />
                    <span className="text-sm font-semibold text-black">{item.title}</span>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h2 className="mt-8 text-lg font-bold text-black">Preguntas Frecuentes (FAQs)</h2>
              <div className="mt-3 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-2 border-blue-400 rounded-lg bg-blue-50 p-3 cursor-pointer" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="text-blue-700" size={20} />
                        <p className="font-semibold text-sm text-black">{faq.question}</p>
                      </div>
                      <ChevronLeft size={20} className={`transition-transform ${openFAQ === index ? "-rotate-90" : "rotate-90"}`} />
                    </div>
                    {openFAQ === index && <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>}
                  </div>
                ))}
              </div>
            </div>
          </DashboardCard>
        </div>
      </main>
    </div>
  );
}
