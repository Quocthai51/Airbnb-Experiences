import React from "react";
import ListImg from "../images/listImage.png";

function ImageList() {
  return (
    <div>
      <div className="ImageList">
        <img src={ListImg} />
      </div>
      <div className="SomeInfo">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default ImageList;
