import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo-dashboard.png";

export default function SidebarLogo() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === "/dashboard";

  return (
    <div
      onClick={() => navigate("/dashboard")}
      className={`
        flex justify-center mb-4 sm:mb-4 cursor-pointer transition-all
        ${isActive ? "scale-105 drop-shadow-lg" : "opacity-80 hover:opacity-100"}
      `}
    >
      <div className="w-32 h-32 sm:w-36 rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={logo}
          alt="VotApp sidebar logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
