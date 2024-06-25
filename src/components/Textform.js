import React, { useState } from "react";
import "../App.css";
import About from "./About";
// import Alert from "./Alert";

const Textform = (props) => {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    if (text.length <= 0) {
      props.showAlert("Text box cannot be empty");
      // document.querySelector(".alert-div").style.display = "flex";
    } else {
      // document.querySelector(".alert-div").style.display = "none";
      console.log("button was clicked");
      let newTex = text.toUpperCase();
      setText(newTex);
    } 
  };
  const handleCap = () => {
    if (text.length <= 0) {
      // document.querySelector(".alert-div").style.display = "flex";
      props.showAlert("Text box cannot be empty");
    } else {
      // document.querySelector(".alert-div").style.display = "none";

    }
    // Initialize `text` appropriately (e.g., from state or props)
    let newTex = text.split(" ");
    console.log(newTex);

    let capitalizedWords = newTex.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    let k = capitalizedWords.join(" ");
    console.log(k);
    setText(k); // Ensure setText is defined appropriately to update the state
  };

  const handleLoClick = () => {
    if (text.length <= 0) {
      // document.querySelector(".alert-div").style.display = "flex";
      props.showAlert("Text box cannot be empty");
    } else {
      // document.querySelector('.alert-div').style.display = 'none'
      // console.log("button was clicked");
    let newTex = text.toLowerCase();
    setText(newTex);
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleRemove = () => {
    if (text.length <= 0) {
      // document.querySelector('.alert-div').style.display = 'flex'
      props.showAlert("No text to remove");
    } else {
      // document.querySelector(".alert-div").style.display = "none";
      let newTex = text;
      newTex = "";
      setText(newTex);
    }
  };
  const handleCopy = () => {
    if (text.length <= 0) {
    // document.querySelector('.alert-div').style.display = 'flex'
      props.showAlert("No text to copy");
    } else {
      // document.querySelector(".alert-div").style.display = "none";
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied to clipboard");
    }
  };

  return (
    <>
      <div className="contain">
        <div className="textDiv">
          <h1 className="head">{props.heading}</h1>
          <div className="box-div">
            <textarea
              id="box"
              className="box"
              value={text}
              onChange={handleOnChange}
              rows="8"
            ></textarea>
          </div>
          <button className="Btn" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="Btn" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="Btn" onClick={handleCap}>
            Capitalize first
          </button>
          <button className="Btn" onClick={handleRemove}>
            Clear text
          </button>
          <button className="Btn" onClick={handleCopy}>
            Copy text
          </button>
        </div>
        <div className="summary">
          <h1>Your text summary</h1>
          <p>
            {" "}
            {text.trim().split(" ").length-1} words and {text.length} characters
          </p>
          <p> {0.08 * text.trim().split(" ").length} Minutes to read</p>
        </div>
        <h2 className="preview">Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box above  to preview"}
        </p>
      </div>
    </>
  );
};
export default Textform;
