import React from "react";
import Navbar from "./Navbar";
import ImageList from "./ImageList";
import Card from "./Card";
import star from "../images/star.png";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageList />
      <div className="Card--List">
        <Card
          title="Life lessons with Katie Zaferes"
          price="$136"
          rating="4.5"
          country="USA"
          reviewCount="6"
          img={product1}
          star={star}
        />
        <Card
          title="Learn wedding photography"     
          price="$125"
          rating="5.0"
          country="USA"
          reviewCount="30"
          img={product2}
          star={star}
        />
        <Card
          title="Group Mountain Biking"
          price="$50"
          rating="4.8"
          country="USA"
          reviewCount="2"
          img={product3}
          star={star}
        />
      </div>
    </div>
  );
}

export default App;
