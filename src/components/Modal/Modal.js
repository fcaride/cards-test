import { useState } from "react";
import "./styles.css";

const Modal = ({ handleClose, show, addCard }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const cardInfo = {
      name,
      image,
      description,
    };
    addCard(cardInfo);
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <form className="form-modal" onSubmit={handleSubmit}>
          <header className="headerModal">Nueva tarjeta</header>
          <input
            className="inputModal"
            placeholder="Titulo"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="inputModal"
            placeholder="Descripción"
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            className="inputModal"
            placeholder="Imagen (URL)"
            onChange={(event) => setImage(event.target.value)}
          />
          <input type="submit" value="Submit" />
          <button onClick={() => handleClose(false)}>close</button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
