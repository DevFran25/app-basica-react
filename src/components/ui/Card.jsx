export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-lg shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
