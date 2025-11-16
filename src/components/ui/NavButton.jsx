export default function NavButton({ icon: Icon, isActive = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center
        transition-all duration-200
        ${
          isActive
            ? "bg-white text-blue-900 shadow-md"
            : "bg-white text-blue-900 hover:scale-105"
        }
      `}
    >
      <Icon size={24} strokeWidth={2.5} />
    </button>
  );
}
