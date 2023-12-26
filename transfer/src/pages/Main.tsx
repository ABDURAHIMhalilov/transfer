import React, { useEffect } from "react";
import img from "../img/Group 11.png";
import img1 from "../img/Group 1.png";
import "./css/Main.css";

import Img from "../img/Desktop - 37.png";

export default function Main() {
  return (
    <div className="header" onClick={() => (window.location.href = "profile")}>
      {/* <img src={Img} alt="" /> */}
      {/* <div className="navbar">
        <a href=""><h3>About</h3></a>
        <img src={img1} alt="" />
        <a href=""><h3>Connect wallet</h3></a>
      </div> */}
      <div className="Img_div">
        <div className="text_div">
          <h1>
            One <br /> button
            <br /> to <br />
            stable
            <br /> all
            <br /> your
            <br /> funds
          </h1>
        </div>
      </div>
    </div>
  );
}
