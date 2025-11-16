export default function Input({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="relative mb-4">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10">
          {icon}
        </div>
      )}
      <input
        type={type} // puede ser "text", "email", "date", etc.
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full 
          ${icon ? "pl-12" : "pl-4"} 
          pr-4 
          py-3 
          bg-white 
          border-2 border-gray-300 
          rounded-lg 
          focus:outline-none focus:border-blue-500 
          transition-colors 
          text-gray-700 
          placeholder-gray-400
        `}
      />
    </div>
  );
}
