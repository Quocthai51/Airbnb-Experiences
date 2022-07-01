import React from "react";
import star from "../images/star.png";
import product1 from "../images/product-1.png";

function Card(props) {
  return (
    <div className="Card--List">
      <div className="Card">
        <div className="Card--Image">
          <span>SOLD OUT</span>
          <img src={props.img} />
        </div>
        <div className="Card--Rating">
          <img src={props.star} />
            
          <p className="gray--text">
            <span className="black--text"> {props.rating} </span>
            <span >({props.reviewCount}) •</span> {props.country}
          </p>
        </div>
        <div className="Card--Detail">
          <p>{props.title}</p>
          <p><span className="bold--text">From {props.price} </span> / person</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
