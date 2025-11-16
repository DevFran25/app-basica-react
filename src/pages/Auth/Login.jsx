import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Logo from "@/components/Logo";
import BackgroundImage from "@/components/BackgroundImage";
import Input from "@/components/ui/input";
import Confirmacion from "@/components/ui/Confirmacion";
import { FiCalendar, FiCreditCard } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { login } from "@/services/api"; 


export default function Login() {
  const [dni, setDni] = useState("");
  const [fecha, setFecha] = useState("");
  const [confirmacion, setConfirmacion] = useState(null);

  const validarDatos = () => {
    setConfirmacion({
      nombres: "Francisco Aquino",
      distrito: "Chiclayo",
    });
  };

  const navigate = useNavigate();

 const handleLogin = async () => {
  if (!dni) return;

  try {
    const response = await login(dni);

    // Si existe error
    if (response.error) {
      alert(response.error);
      return;
    }

    // Guardamos info 
    setConfirmacion({
      nombres: response.usuario.nombre,
      distrito: "Chiclayo", 
    });

    // Redirigir 
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  } catch (err) {
    console.error(err);
    alert("Error conectando con el servidor");
  }
};

  return (
    <BackgroundImage>
      <div className="min-h-screen flex items-center justify-start pl-32 sm:pl-40 md:pl-64 lg:pl-128 pr-6 sm:pr-8">
        <Card>
          <Logo />
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-2">
            Ingreso a la Plataforma
          </h1>
          <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Valida tus datos de forma segura
          </p>

          <Input
            icon={<FiCreditCard />}
            placeholder="N° de DNI"
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />

          <Input
            icon={<FiCalendar />}
            placeholder="Fecha de emisión de DNI"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <Button
            variant="secondary"
            className="mt-2"
            onClick={validarDatos}
            disabled={!dni || !fecha}
          >
            Validar Datos
          </Button>
          {confirmacion && (
            <Confirmacion
              nombres={confirmacion.nombres}
              distrito={confirmacion.distrito}
            />
          )}

          <div className="flex gap-3 mt-3">
            <Button
              variant="cancel"
              onClick={() => console.log("Cancelar")}
              disabled={!dni && !fecha}
              className={`${
                !dni && !fecha ? "opacity-50 cursor-not-allowed" : ""
              } flex items-center justify-center gap-2`}
            >
              <FiX /> Cancelar
            </Button>

           <Button
            variant="confirm"
            onClick={handleLogin}
            disabled={!dni || !fecha}
            className="flex items-center justify-center gap-2"
          >
            <FiSave /> Confirmar
          </Button>

          </div>
        </Card>
      </div>
    </BackgroundImage>
  );
}
