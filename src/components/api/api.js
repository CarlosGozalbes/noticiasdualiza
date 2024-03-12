const apiUrl = import.meta.env.VITE_API_URL;

const getNoticias = async () => {
  const endPoint = "/noticiass";
  try {
    const response = await fetch(apiUrl + endPoint);
    if (!response.ok) throw new Error("Error en la petición HTTP");
    const data = await response.json();
    return data["hydra:member"];
  } catch (error) {
    console.log(error);
  }
};

export default getNoticias;
