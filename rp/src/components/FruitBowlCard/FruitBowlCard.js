import React from "react";
import "./FruitBowlCard.css";

//render 12 cards
const FruitBowlCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default FruitBowlCard;