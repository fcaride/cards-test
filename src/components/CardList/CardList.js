import React from "react";
import Card from "../Card";
import "./styles.css";

const CardList = ({ cardList, onEdit }) => (
  <div className="cardList">
    {cardList.map((card, index) => (
      <Card cardInfo={card} key={index} onEdit={onEdit} />
    ))}
  </div>
);
export default CardList;
