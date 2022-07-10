import React, { Suspense } from "react";
import MainBar from "./Component/MainBar";
import SideBar from "./Component/SideBar";
import "./styles/main.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Intro from "./Component/Intro";
import { useState } from "react";

function App() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  const [viewStatus, setViewStatus] = useState(false);

  /* toggling the responsive-menu */
  const toggleMenu = () => {
    document.querySelector(".sideBar").classList.toggle("menuActive");
  };

  return (
    <Router>
      <div className="App">
        {viewStatus ? (
          <div className="content">
            <SideBar toggleMenu={toggleMenu} />
            <MainBar toggleMenu={toggleMenu} />
          </div>
        ) : (
          <Intro toggleView={setViewStatus} />
        )}
      </div>
    </Router>
  );
}

export default App;
