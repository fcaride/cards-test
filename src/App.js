import { useState } from "react";
import AddButton from "./components/AddButton";
import CardList from "./components/CardList";
import "./App.css";
import Modal from "./components/Modal/";
import SortButton from "./components/SortButton/";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardToEdit, setCardToEdit] = useState({});
  const onEditHandler = (cardInfo) => {
    setShowModal(true);
    setCardToEdit(cardInfo);
  };

  const onClickHandler = () => {
    setShowModal(true);
    setCardToEdit({});
  };

  return (
    <div className="wrapper">
      <CardList onEdit={onEditHandler} />
      <AddButton onClickHandler={onClickHandler} />
      <SortButton />
      <Modal
        show={showModal}
        setShowModal={setShowModal}
        cardToEdit={cardToEdit}
      />
    </div>
  );
};

export default App;
