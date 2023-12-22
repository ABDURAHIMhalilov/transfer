import React, {useEffect} from 'react'
import img from '../img/Group 11.png'
import img1 from '../img/Group 1.png'
import './Main.css'


export default function Main() {
  return (
    <div className='header'>
        <div className="navbar">
            <h3>About</h3>
            <img src={img1} alt="" />
            <h3>Connect wallet</h3>
        </div>
        <div className="Img_div">
        <img className='back_img' src={img} alt="" />
        </div>
    </div>
  )
}
