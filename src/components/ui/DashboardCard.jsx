
export default function DashboardCard({ title, children, bg = "#003366" }) {
  return (
    <div
      className="rounded-xl p-4 sm:p-5 shadow-md w-full text-sm sm:text-base text-white"
      style={{ backgroundColor: bg }}
    >
      {title && <h2 className="text-base sm:text-lg font-bold mb-3 text-center">{title}</h2>}
      {children}
    </div>
  );
}
