import { useState } from "react";
import "./styles.css";

const Card = ({ cardInfo, removeCard, onEdit }) => {
  const [showButtons, setShowButtons] = useState(false);
  const buttons = (
    <div>
      <button
        className="floatingButton cardDeleteButton"
        onClick={() => removeCard(cardInfo.id)}
      >
        Borrar
      </button>
      <button
        className="floatingButton cardEditButton"
        onClick={() => onEdit(cardInfo)}
      >
        Editar
      </button>
    </div>
  );

  return (
    <div
      className="card"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <img
        src={
          cardInfo.image ||
          "http://lpwonline.com/wp-content/themes/vixa/assets/images/default.png"
        }
        alt="card"
        className="image"
      />
      <div className="cardTitle">{cardInfo.name}</div>
      {showButtons && buttons}
      <div className="cardDescription">{cardInfo.description}</div>
    </div>
  );
};
export default Card;
