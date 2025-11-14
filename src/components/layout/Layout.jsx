import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* contenido dinámico */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
