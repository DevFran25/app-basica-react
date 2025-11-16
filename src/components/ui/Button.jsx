export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "w-full py-3 font-bold rounded-xl transition-all duration-200 text-lg";

  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg",
    secondary:
      "border-2 border-blue-800 text-blue-800 hover:bg-blue-50 bg-white shadow-md font-semibold",
    cancel: "bg-red-500 hover:bg-red-600 text-white shadow-lg",
    confirm: "bg-green-500 hover:bg-green-600 text-white shadow-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
