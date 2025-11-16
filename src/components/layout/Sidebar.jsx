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

export default function Sidebar({ activeRoute = "home" }) {
  const navigate = useNavigate();

  const mainMenuItems = [
    { id: "home", icon: Home, label: "Inicio", path: "/dashboard" },
    {
      id: "calendar",
      icon: Calendar,
      label: "Calendario Electoral",
      path: "/dashboard",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Mi Lugar de Votación",
      path: "/dashboard",
    },
    {
      id: "users",
      icon: Users,
      label: "Usuarios",
      path: "/dashboard",
    },
    {
      id: "Documents",
      icon: Document,
      label: "FileText",
      path: "/dashboard",
    },
    {
      id: "settings",
      icon: Settings,
      label: "Configuración",
      path: "/dashboard",
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <aside
      className="flex flex-col items-center bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900 
             rounded-3xl shadow-2xl py-4 sm:py-6
             w-14 sm:w-16 md:w-20 lg:w-24  
             min-h-screen transition-all duration-300
             ml-2 sm:ml-2 md:ml-6 lg:ml-16"
    >
      {/* Logo */}
      <div>
        <Logo />
      </div>

      {/* Nav Buttons */}
      <nav className="flex flex-col items-center space-y-3 sm:space-y-4 md:space-y-5 flex-1">
        {mainMenuItems.map((item) => (
          <NavButton
            key={item.id}
            icon={item.icon}
            isActive={activeRoute === item.id}
            onClick={() => handleNavigate(item.path)}
          />
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-4 sm:pt-6">
        <button
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center 
                     text-blue-900 hover:scale-105 transition-all duration-200 shadow-md"
          onClick={handleLogout}
        >
          <LogOut size={20} className="sm:hidden" strokeWidth={2.5} />
          <LogOut size={24} className="hidden sm:block" strokeWidth={2.5} />
        </button>
      </div>
    </aside>
  );
}
