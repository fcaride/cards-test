import "./styles.css";

const SortButton = ({ sortCards }) => (
  <button type="button" className="sortButton" onClick={sortCards}>
    <div className="addButtonText">S</div>
  </button>
);
export default SortButton;
