import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { link } from "joi";

const Navbar = ({mode , setTheme , toggleMode , aboutText , handleThemeBlue , handleThemeGray , handleThemeGreen}) => {
  const {backgroundColor , secondaryBackgroundColor , border} = setTheme
  const handleTitle = () => {
    document.title = "ToolYourText - About";
  };
  const handleTitle2 = () => {
    document.title = "ToolYourText - Home";
  };
  return (
    <>
      <nav className="nav" style={mode && {backgroundColor}}>
        <div className="Title">
          <h1 className="title">ToolYourText</h1>
          </div>
        <div className="list">
          <Link to ='/'><li onClick={handleTitle2}>Home</li></Link>
           <Link to='/about'><li onClick={handleTitle}>{aboutText}</li></Link> 
          <li>Contact Us</li>
        </div>
        <div className="themes">
          <div onClick={handleThemeBlue} className="blue"></div>
          <div onClick={handleThemeGreen} className="green"></div>
          <div onClick={handleThemeGray} className="gray"></div>
        </div>
        <div className="mode">
          <div className="dark">Dark Mode</div>
          <div className="toggle">
            <input
              type="checkbox"
              id="check"
              className="toggle-check"
              onChange={toggleMode}
            />
            <label htmlFor="check" className="toggle-Label"></label>
          </div>
          <div className="light">Light Mode</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
