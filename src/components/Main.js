import React from "react";
import "..//styles/Main.css";
import img from "../assests/main-2.png";

const Main = () => {
  return (
    <div className="main-container">
      <div className="info">
        <h1>
          Find your <br /> Own unique <br /> Investments
        </h1>
        <p>
          Join our investment firm for <br /> the best hand picked cryptos{" "}
          <br /> for you get rich with us.
        </p>
      </div>
      <div className="image">
        <img className="img-main" src={img} alt="" />
      </div>
    </div>
  );
};

export default Main;
