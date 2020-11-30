import React from "react";
import Card from "../Card";
import "./styles.css";

const CardList = ({ cardList }) => (
  <div className="cardList">
    {cardList.map((card, index) => (
      <Card cardInfo={card} key={index} />
    ))}
  </div>
);
export default CardList;
