import { useState } from "react";
import AddButton from "./components/AddButton";
import CardList from "./components/CardList";
import "./App.css";
import Modal from "./components/Modal/";
import SortButton from "./components/SortButton/";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="wrapper">
      <CardList />
      <AddButton onClickHandler={setShowModal} />
      <SortButton />
      <Modal show={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default App;
