export default function Confirmacion({ nombres, distrito }) {
  return (
    <div
      className="mt-4 p-4 text-white rounded-xl shadow-md w-full max-w-md mx-auto"
      style={{ backgroundColor: "#267540" }}
    >
      <h2 className="text-lg font-bold mb-2">¡Datos Verificados!</h2>
      <p>
        <strong>Nombres y Apellidos: </strong>
        {nombres}
      </p>
      <p>
        <strong>Distrito de Residencia:</strong> {distrito}
      </p>
    </div>
  );
}
