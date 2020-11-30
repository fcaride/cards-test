import "./styles.css";

const AddButton = ({ onClickHandler }) => (
  <button
    type="button"
    className="addButton"
    onClick={() => onClickHandler(true)}
  >
    <div className="addButtonText">+</div>
  </button>
);
export default AddButton;
