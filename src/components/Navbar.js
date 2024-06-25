import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { link } from "joi";


const Navbar = (props) => {
  // const handleThemeBlue = () =>{
  //   // props.setTheme({
  //   //   backgroundColor: 'blue',
  //   // })
  //   props.Theme({
  //     backgroundColor: 'blue'
  //   })
  // }
  // const handleThemeGreen = () =>{
  //   // props.setTheme({
  //   //   backgroundColor: 'green',
  //   // })
  // }
  // const handleThemeGray = () =>{
  //   // props.setTheme({
  //   //   backgroundColor: 'gray',
  //   // })
  // }
  const handleTitle = () =>{
    document.title = 'ToolYourText - About'
  }
  const handleTitle2 = () =>{
    document.title = 'ToolYourText - Home'
  }
  return (
    <>
      <nav className="nav" style={props.mode && props.setTheme}>
        <div className="logo">
          <img src={logo} alt="react-logo" />
        </div>

        <div className="list">
          <Link to ='/'><li onClick={handleTitle2}>Home</li></Link>
          <Link to ='/about' ><li onClick={handleTitle}>{props.aboutText}</li></Link>
          <li>Contact Us</li>
        </div>
        <div className="themes">
          <div onClick={props.handleThemeBlue} className="blue">

          </div>
          <div  onClick={props.handleThemeGreen} className="green">

          </div>
          <div  onClick={props.handleThemeGray} className="gray">

          </div>
        </div>
        <div className="mode">
          <div className="dark">Dark Mode</div>
          <div className="toggle">
            <input type="checkbox" id="check" className="toggle-check" onChange={props.toggleMode}/>
            <label htmlFor="check" className="toggle-Label"></label>
          </div>
          <div className="light">Light Mode</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
