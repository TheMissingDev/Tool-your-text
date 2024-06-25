import React, {useState}from "react";
import {Link} from 'react-router-dom'
import Textform from "./Textform";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor:'white',
  })
  const [btnText , setBtnText] = useState('Enable Dark Mode')
  const toggleStyle = () =>{
    if(myStyle.color == 'black'){
      setMyStyle({
        color: 'white',
        backgroundColor:'black',
        border:'1px solid white'
      })
      document.querySelector('.abt').style.color = 'white'
      setBtnText('Enable Light Mode')
    } else{
      setMyStyle({
        color: 'black',
        backgroundColor:'white',
      })
      document.querySelector('.abt').style.color = 'white'
      setBtnText('Enable Dark Mode')
    }
  }
  return (
    <>
    <div className="Accordion-div">
    <h2 className="abt">About Us </h2>
      <ul className="Accordion">
        <li className="accordion-li" style={myStyle}>
          <label htmlFor="first" className="first-label">Accordion #1 <span>&#x3e;</span></label>
          <input
            type="radio"
            className=""
            id="first"
            name="accordion"
            checked
          />
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              sequi omnis reiciendis est sunt ullam totam sed maxime deleniti
              pariatur.
            </p>
          </div>
        </li>
        <li className="accordion-li" style={myStyle}>
          <label htmlFor="second" className="second-label">Accordion #2 <span>&#x3e;</span></label>
          <input
            type="radio"
            className=""
            id="second"
            name="accordion"
          />
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              sequi omnis reiciendis est sunt ullam totam sed maxime deleniti
              pariatur.
            </p>
          </div>
        </li>
        <li className="accordion-li" style={myStyle}>
          <label htmlFor="third" className="third-label">Accordion #3 <span>&#x3e;</span></label>
          <input
            type="radio"
            className=""
            id="third"
            name="accordion"
          />
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              sequi omnis reiciendis est sunt ullam totam sed maxime deleniti
              pariatur.
            </p>
          </div>
        </li>
        </ul>
      </div>
      <div className="button">
        <button className="mode-btn" onClick={toggleStyle}>{btnText}</button>
      </div>
      </>
  );
}
