import logo from "@/assets/images/logo-dashboard.png";

export default function SidebarLogo() {
  return (
    <div className="flex justify-center mb-4 sm:mb-6">
      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={logo}
          alt="VotApp sidebar logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
