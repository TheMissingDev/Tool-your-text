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
  const [theme, setTheme] = useState({})
  const [textMode, setTextMode] = useState({});
  const {secBackgroundColor , backgroundColor} = setTextMode
  const handleThemeBlue = () => {
    setTheme({
      backgroundColor: "blue",
      secondaryBackgroundColor: "rgb(53, 53, 248)",
      border: '1px solid black'
      
    });
    document.querySelector(".container").style.backgroundColor =
      "rgb(53, 53, 248)";
  };
  const handleThemeGreen = () => {
    setTheme({
      backgroundColor: "green",
      secondaryBackgroundColor: "rgb(106, 255, 106)",
      border: '1px solid black'

    });
    document.querySelector(".container").style.backgroundColor =
      "rgb(106, 255, 106)";
   
  };
  const handleThemeGray = () => {
    setTheme({
      backgroundColor: "gray",
      secondaryBackgroundColor: "rgb(154, 151, 151)",
      border: '1px solid black'
      
    });
    document.querySelector(".container").style.backgroundColor =
      "rgb(154, 151, 151)";
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
      secondaryBackgroundColor:"rgb(205, 205, 205)"
    });
    setTextMode({
      textColor: "black",
      secondaryTextColor: "white",
      secBackgroundColor: "rgb(205, 205, 205)",
    });
    document.querySelector(".container").style.backgroundColor =
    "rgb(205, 205, 205)";
    showAlert("Light mode has been enabled");
    // document.title = "ToolYourText - Light Mode";
    if (Mode.backgroundColor === "white") {
      setTheme({
      backgroundColor: "dimgray",

      });
      setMode({
        color: "white",
        backgroundColor: "dimgray",
      });
      setTextMode({
        textColor: "white",
        secondaryTextColor: "white",
        secBackgroundColor: "black",
      });
      document.querySelector(".container").style.backgroundColor =
      "black";
      showAlert("Dark mode has been enabled");
      // document.title = "ToolYourText - Dark Mode";
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
        <div style={{secBackgroundColor}} className="container">
          <Routes>
            <Route
              exact
              path="/about"
              element={
                <About
                  setTextMode={textMode}
                  setTheme={theme}
                  handleThemeBlue={handleThemeBlue}
                  handleThemeGreen={handleThemeGreen}
                  handleThemeGray={handleThemeGray}
                  toggleMode={toggleMode}
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <Textform
                  setTextMode={textMode}
                  setTheme={theme}
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
