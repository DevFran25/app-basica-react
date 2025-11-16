import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import BackgroundImage from "@/components/BackgroundImage";

export default function Dashboard() {
  return (
    <BackgroundImage>
      <div className="min-h-screen flex flex-col items-center justify-start pt-16 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <Card>
            <h2 className="text-xl font-semibold mb-2">
              Estadísticas de Votación
            </h2>
            <p className="text-gray-600 text-sm">
              Resumen de votos recientes y participación.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-2">Usuarios Registrados</h2>
            <p className="text-gray-600 text-sm">
              Lista de usuarios con acceso al sistema.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold mb-2">Configuraciones</h2>
            <Button variant="primary" className="mt-2">
              Ajustes
            </Button>
          </Card>
        </div>
      </div>
    </BackgroundImage>
  );
}
