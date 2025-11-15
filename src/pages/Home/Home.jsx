import fondo from "@/assets/images/fondo.png";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-end px-6 md:px-16 lg:px-24"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <Card>
        <Logo />

        <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Bienvenido a VotApp
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Tu voto informado y seguro
        </p>

        <Button variant="primary">Ingresar con DNI</Button>

        <Button variant="secondary" className="mt-4">
          Consultar Información General
        </Button>
      </Card>
    </div>
  );
}
