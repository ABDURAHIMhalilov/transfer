import React from 'react'
import img from "../img/Group 11.png";
import img1 from "../img/Group 1.png";
import "./css/Main.css";

export default function Navbar() {
  return (
    <div onClick={() => window.location.href = 'profile'}>
        <div className="navbar">
        <a href=""><h3>About</h3></a>
        <img src={img1} alt="" />
        <a href=""><h3>Connect wallet</h3></a>
      </div>
    </div>
  )
}
