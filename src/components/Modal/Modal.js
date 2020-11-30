import { useState } from "react";
import "./styles.css";

const Modal = ({ setShowModal, show, addCard }) => {
  const showHideClassName = show ? "display-block" : "display-none";
  const [values, setValues] = useState({
    name: "",
    image: "",
    description: "",
  });
  const { name, image, description } = values;

  const handleSubmit = () => {
    addCard(values);
    setValues({ name: "", image: "", description: "" });
    setShowModal(false);
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={showHideClassName}>
      <div className="modal" onClick={() => setShowModal(false)} />
      <section className="modal-main">
        <header className="headerModal">Nueva tarjeta</header>
        <input
          value={name}
          name="name"
          className="inputModal"
          placeholder="Titulo"
          onChange={changeHandler}
        />
        <input
          value={description}
          name="description"
          className="inputModal"
          placeholder="Descripción"
          onChange={changeHandler}
        />
        <input
          value={image}
          name="image"
          className="inputModal"
          placeholder="Imagen (URL)"
          onChange={changeHandler}
        />
        <button
          value="Añadir"
          onClick={handleSubmit}
          className="addButtonModal"
        >
          Agregar
        </button>
      </section>
    </div>
  );
};

export default Modal;
