export default function NavButton({ icon: Icon, route, activeRoute, onClick }) {
  const isActive = activeRoute === route;

  return (
    <button
      onClick={onClick}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center
        transition-all duration-200
        ${
          isActive
            ? "bg-blue-900 text-white shadow-lg scale-110"
            : "bg-white text-blue-900 hover:scale-105"
        }
      `}
    >
      <Icon size={24} strokeWidth={2.5} />
    </button>
  );
}
