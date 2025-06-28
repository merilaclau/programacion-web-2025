import "./style.css"

function Card({imagen, titulo, descripcion}) {
  return (
    <div class="card box-shadow">
      <div class="card-img-container">
        <img
          src={imagen}
          alt="buildings"
        />
      </div>
      <div class="card-text-container">
        <h3>{titulo}</h3>
        <p>
          {descripcion}
        </p>
      </div>
    </div>
  );
}

export default Card;
