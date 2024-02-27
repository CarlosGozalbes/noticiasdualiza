
import './cardProyecto.css'; // Importa tu archivo CSS para estilos

const CardProyecto = ({ title, imageUrl, text }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-image" alt="Card" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default CardProyecto;