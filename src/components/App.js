import React from "react";
import Navbar from "./Navbar";
import ImageList from "./ImageList";
import Card from "./Card";
import datas from "../data";

function App() {
  const cardElemnents = datas.map((item) => {
    return (
      <Card
        key ={item.id}
        {...item}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <ImageList />
      <div className="Card--List">{cardElemnents}</div>
    </div>
  );
}

export default App;
