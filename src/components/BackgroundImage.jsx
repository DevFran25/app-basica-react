import fondo from "@/assets/images/fondo.jpg";

export default function BackgroundImage({ children }) {
  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}
