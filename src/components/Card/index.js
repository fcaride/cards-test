import "./styles.css";

const Card = ({ cardInfo }) => (
  <div className="card">
    <img
      src={
        cardInfo.image ||
        "http://lpwonline.com/wp-content/themes/vixa/assets/images/default.png"
      }
      alt="card"
      className="image"
    />
    <div className="cardTitle">{cardInfo.name}</div>
    <div className="cardDescription">{cardInfo.description}</div>
  </div>
);
export default Card;
