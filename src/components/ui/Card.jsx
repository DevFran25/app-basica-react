export default function Card({ children }) {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-md w-full">
      {children}
    </div>
  );
}
