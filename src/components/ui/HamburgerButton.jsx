import { Menu, X } from "lucide-react";

export default function HamburgerButton({ isOpen, onToggle }) {
  return (
    <button
      className="md:hidden fixed top-2 left-2 z-30 bg-white p-1 rounded shadow"
      onClick={onToggle}
    >
      {isOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
}
