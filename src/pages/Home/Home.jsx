import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Logo from "@/components/Logo";
import BackgroundImage from "@/components/BackgroundImage";

export default function Home() {
  return (
    <BackgroundImage>
      <div
        className="
          min-h-screen
          flex 
          items-center 
          justify-center 
          px-4 sm:px-6 
          py-8 sm:py-12
          
          md:justify-start   /* desktop lo mueve a la izquierda */
          md:pl-24 lg:pl-40  /* separación solo en desktop */
        "
      >
        <Card>
          <Logo />

          <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-2">
            Bienvenido a VotApp
          </h1>
          <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Tu voto informado y seguro
          </p>

          <Button variant="primary">Ingresar con DNI</Button>

          <Button variant="secondary" className="mt-3 sm:mt-4">
            Consultar Información General
          </Button>
        </Card>
      </div>
    </BackgroundImage>
  );
}
