import React, {useState}from "react";
// import Textform from "./Textform";

export default function About({setTextMode , setTheme}) {
  const {backgroundColor , secondaryBackgroundColor , border} = setTheme
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor:'white',
  })
  const [btnText , setBtnText] = useState('Enable Dark Mode')
  const toggleStyle = () =>{
    if(myStyle.backgroundColor == 'black'){
      setMyStyle({
        color: 'black',
        backgroundColor:'white',
        border:'1px solid black'
      })
      document.querySelector('.abt').style.color = 'white'
      setBtnText('Enable Light Mode')
    } else{
      setMyStyle({
        color: 'white',
        backgroundColor:'black',
        border:'1px solid white'

      })
      document.querySelector('.abt').style.color = 'white'
      setBtnText('Enable Dark Mode')
    }
  }
  return (
    <>
    <div className="Accordion-div" style={setTextMode && {secondaryBackgroundColor}}>
    <h2 className="abt">About Us </h2>
      <ul className="Accordion" style={setTextMode && {secondaryBackgroundColor}}>
        <li className="accordion-li" style={myStyle|| {border}}>
          <label  htmlFor="first" className="first-label">Analyze your text<span>&#x3e;</span></label>
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
        <li className="accordion-li" style={myStyle|| {border}}>
          <label  htmlFor="second" className="second-label">Free to use<span>&#x3e;</span></label>
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
        <li className="accordion-li" style={myStyle || {border}}>
          <label htmlFor="third" className="third-label">Browser Compatible<span>&#x3e;</span></label>
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
