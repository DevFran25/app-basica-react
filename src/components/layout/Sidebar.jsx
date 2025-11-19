import { useNavigate } from "react-router-dom";
import Logo from "@/components/SideBarLogo";
import NavButton from "@/components/ui/NavButton";
import {
  Home,
  Calendar,
  MapPin,
  Users,
  FileText as Document,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar({ activeRoute = "/" }) {
  const navigate = useNavigate();

  const mainMenuItems = [
    { id: "/dashboard", icon: Home, label: "Inicio", path: "/dashboard" },
    {
      id: "/calendario-electoral",
      icon: Calendar,
      label: "Calendario Electoral",
      path: "/calendario-electoral",
    },
    {
      id: "/lugar-de-votacion",
      icon: MapPin,
      label: "Mi Lugar de Votación",
      path: "/lugar-de-votacion",
    },
    {
      id: "/usuarios",
      icon: Users,
      label: "Usuarios",
      path: "/usuarios",
    },
    {
      id: "/documentos",
      icon: Document,
      label: "Documentos",
      path: "/documentos",
    },
    {
      id: "/configuracion",
      icon: Settings,
      label: "Configuración",
      path: "/configuracion",
    },
  ];

  return (
    <aside
      className="flex flex-col items-center bg-[#115691] rounded-3xl shadow-2xl py-4 sm:py-6
                 w-14 sm:w-16 md:w-20 lg:w-24 min-h-screen transition-all duration-300
                 ml-2 sm:ml-2 md:ml-6 lg:ml-16"
    >
      {/* Logo */}
      <Logo />

      {/* Nav Buttons */}
      <nav className="flex flex-col items-center space-y-4 flex-1">
        {mainMenuItems.map((item) => (
          <NavButton
            key={item.id}
            icon={item.icon}
            isActive={activeRoute === item.id}   
            onClick={() => navigate(item.path)}
          />
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto pt-6">
        <button
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center 
                     text-blue-900 hover:scale-105 transition-all duration-200 shadow-md"
          onClick={() => navigate("/login")}
        >
          <LogOut size={24} strokeWidth={2.5} />
        </button>
      </div>
    </aside>
  );
}
