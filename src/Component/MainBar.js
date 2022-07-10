import React, { useLayoutEffect } from "react";
import sun1 from "../Images/sun1.png";
import moon from "../Images/moon.png";
import eye from "../Images/eye.png";
import { Switch, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Timeline from "./Timeline";
import Work from "./Work";

const MainBar = ({ toggleMenu }) => {
  const location = useLocation();
  React.useEffect(() => {
    const timelineOne = gsap.timeline();
    timelineOne.from(".theme-control", {
      duration: 1,
      y: "-100%",
      ease: "back",
    });
  });

  useLayoutEffect(() => {
    document.querySelector(".mainBar").scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.toggle("dark-theme");
      const timelineThree = gsap.timeline();
      document.getElementById("theme-iconOne").style.display = "block";
      timelineThree
        .to("#theme-iconOne", {
          duration: 1,
          y: "20%",
          ease: "back",
        })
        .to("#theme-iconOne", {
          duration: 1,
          y: "-200%",
          ease: "back",
        });
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      document.getElementById("theme-iconTwo").style.display = "block";
      const timelineThree = gsap.timeline();
      timelineThree
        .to("#theme-iconTwo", {
          duration: 1,
          y: "20%",
          ease: "back",
        })
        .to("#theme-iconTwo", {
          duration: 1,
          y: "-200%",
          ease: "back",
        });
    }
  };

  return (
    <section className="mainBar">
      <img src={sun1} alt="" id="theme-iconOne" className="themeIcon" />
      <img src={moon} alt="" id="theme-iconTwo" />
      <div className="theme-control">
        <button className="light" onClick={toggleTheme}>
          <img src={eye} alt="" class="theme-img" />
        </button>
        <button className="light menu-bar" onClick={toggleMenu}>
          <i class="fa fa-bars"></i>
        </button>
      </div>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/timeline">
          <Timeline />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </section>
  );
};

export default MainBar;
