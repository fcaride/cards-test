import { useState } from "react";
import AddButton from "./components/AddButton";
import CardList from "./components/CardList";
import "./App.css";
import Modal from "./components/Modal/";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="wrapper">
      <CardList />
      <AddButton onClickHandler={setShowModal} />
      <Modal show={showModal} handleClose={setShowModal} />
    </div>
  );
};

export default App;
