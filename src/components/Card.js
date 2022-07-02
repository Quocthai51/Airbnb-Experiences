import React from "react";
import star from "../images/star.png";

function Card(props) {

  let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    

  return (
    <div className="Card--List">
      <div className="Card">
        <div className="Card--Image">
          {badgeText && <span>{badgeText}</span>}
          <img src={`../images/${props.coverImg}`} />
        </div>
        <div className="Card--Rating">
          <img src={star} />
          <p className="gray--text">
            <span className="black--text"> {props.stats.rating} </span>
            <span>({props.stats.reviewCount}) •</span> {props.location}
          </p>
        </div>
        <div className="Card--Detail">
          <p>{props.title}</p>
          <p>
            <span className="bold--text">From {props.price}$</span> / person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
