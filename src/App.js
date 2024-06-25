// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState({});
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState();

  const handleThemeBlue = () => {
    setTheme({
      backgroundColor: "blue",
    });
    document.querySelector(".container").style.backgroundColor =
      "rgb(53, 53, 248)";
    if (window.location.href == "http://localhost:3000/about") {
      document.querySelector(".Accordion-div").style.backgroundColor =
        "rgb(53, 53, 248)";
      document.querySelector(".Accordion").style.backgroundColor =
        "rgb(53, 53, 248)";
    } else {
      document.querySelector(".box").style.backgroundColor = "rgb(53, 53, 248)";
    }
  };
  const handleThemeGreen = () => {
    setTheme({
      backgroundColor: "green",
    });
    document.querySelector(".container").style.backgroundColor =
      "rgb(106, 255, 106)";
    if (window.location.href == "http://localhost:3000/about") {
      document.querySelector(".Accordion-div").style.backgroundColor =
        "rgb(106, 255, 106)";
      document.querySelector(".Accordion").style.backgroundColor =
        "rgb(106, 255, 106)";
    } else {
      document.querySelector(".box").style.backgroundColor =
        "rgb(106, 255, 106)";
    }
  };
  const handleThemeGray = () => {
    setTheme({
      backgroundColor: "gray",
    });
    document.querySelector(".container").style.backgroundColor =
      "rgb(154, 151, 151)";
    if (window.location.href == "http://localhost:3000/about") {
      document.querySelector(".Accordion-div").style.backgroundColor =
        "rgb(154, 151, 151)"
      document.querySelector(".Accordion").style.backgroundColor =
        "rgb(154, 151, 151)";
    } else {
      document.querySelector(".box").style.backgroundColor =
        "rgb(154, 151, 151)";
    }
  };
  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
  };
  const toggleMode = () => {
    setMode({
      backgroundColor: "white",
    });
    setTheme({
      backgroundColor: "white",
    });
    showAlert("Light mode has been enabled");
    document.title = "ToolYourText - Light Mode";
    document.querySelector(".container").style.backgroundColor =
      "rgb(205, 205, 205)";
    if(window.location.href == "http://localhost:3000/about"){
      document.querySelector(".Accordion-div").style.backgroundColor =
      "rgb(205, 205, 205)"
    document.querySelector(".Accordion").style.backgroundColor =
      "rgb(205, 205, 205)";
      // document.querySelector('.accordion-li').style.backgroundColor = "rgb(190 , 190, 190)"
    }
      if(window.location.href !== "http://localhost:3000/about"){
        document.querySelector(".box").style.backgroundColor = "rgb(205, 205, 205)";
        document.querySelector(".box").style.color = "black";
        document.querySelector(".summary").style.color = "black";
        document.querySelector(".contain").style.color = "black";
        document.querySelector(".head").style.color = "black";
      }
    if (Mode.backgroundColor === "white") {
      setTheme(null);
      setMode({
        backgroundColor: "dimgray",
      });
      showAlert("Dark mode has been enabled");
      document.title = "ToolYourText - Dark Mode";
      document.querySelector(".container").style.backgroundColor =
      "black";
      if(window.location.href == "http://localhost:3000/about"){
        document.querySelector(".Accordion-div").style.backgroundColor =
        "black"
      document.querySelector(".Accordion").style.backgroundColor =
        "black";
        // document.querySelector('.accordion-li').style.backgroundColor = "rgb(190 , 190, 190)"
      }
      if(window.location.href !== "http://localhost:3000/about"){
        document.querySelector(".box").style.backgroundColor = "black";
        document.querySelector(".box").style.color = "white";
        document.querySelector(".container").style.backgroundColor = "black";
        document.querySelector(".summary").style.color = "white";
        document.querySelector(".contain").style.color = "white";
        document.querySelector(".head").style.color = "white";
      }
    }
  };
  setTimeout(() => {
    setAlert(null);
  }, 4000);
  return (
    <>
      <Router>
        <Navbar
          aboutText="About React"
          mode={Mode}
          toggleMode={toggleMode}
          setTheme={theme}
          handleThemeBlue={handleThemeBlue}
          handleThemeGreen={handleThemeGreen}
          handleThemeGray={handleThemeGray}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/about"
              element={
                <About
                  setTheme={theme}
                  handleThemeBlue={handleThemeBlue}
                  handleThemeGreen={handleThemeGreen}
                  handleThemeGray={handleThemeGray}
                  toggleMode = {toggleMode}
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter text below"
                  mode={Mode}
                />
              }
            />
          </Routes>
          <div className="text"></div>
        </div>
      </Router>
    </>
  );
}

export default App;
