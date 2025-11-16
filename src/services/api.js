const BASE_URL = "http://localhost:5000";

export const getUsuarios = async () => {
  const res = await fetch(`${BASE_URL}/usuarios`);
  return res.json();
};

export const login = async (dni, fecha) => {
  const res = await fetch(`${BASE_URL}/usuarios/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dni, fecha }),
  });
  return res.json();
};
