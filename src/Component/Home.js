import React from "react";
import web from "../Images/seo.svg";
import multi from "../Images/multiscreen.svg";
import wireframe from "../Images/wireframe.svg";
import user from "../Images/user.png";
import reviews from "../authorData/reviews";

const Home = () => {
  const [review, setReview] = React.useState({
    name: "danny",
    profession: "android dev",
    review:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  });

  return (
    <section className="home">
      <div className="banner">
        <div className="colorback"></div>
        <h4>VIPIN CHANDRA</h4>
        <h1>FRONT END DEVELOPER</h1>
        <p>
          <quote>" LETS TURN IDEAS INTO CODE "</quote>
        </p>
        <a
          class="res-link"
          href="https://vipinresume.herokuapp.com/"
          target="blank"
        >
          Resume &#x27A1;
        </a>
      </div>
      <div className="each-section">
        <div className="side-section">
          <h6>LITTLE ABOUT DAY LIFE</h6>
          <h2>What i love to do?</h2>
        </div>
        <div className="main-section">
          <p class="section-para">
            I <strong>Invest</strong> most of time around my little Pc learning
            about Web Development and Tech . Beside that i love listening to
            music and to play football in my spare time.
          </p>
        </div>
      </div>
      <div className="each-section">
        <div className="side-section">
          <h6>CODING JOURNEY</h6>
          <h2>How it all get started? </h2>
        </div>
        <div className="main-section">
          <p class="section-para">
            I've been <strong>coding</strong> since highschool but to build
            something out of code that thing i learnt at final year of my
            graduation where i build website for academic project.
          </p>
          <p class="section-para">
            After getting my hands on{" "}
            <strong>Javascript, css and React </strong> , web development seems
            to be more <strong>inspiring</strong> and <strong>exciting</strong>{" "}
            as it opens up million ways to bring your creativity or
            unexceptional ideas to any site that you want to build in future for
            Personal Brand or for other franchises.
          </p>
          <p></p>
        </div>
      </div>
      <div className="each-section">
        <div className="side-section">
          <h6>SERVICE THAT I PROVIDE </h6>
          <h2>Skills to help you</h2>
        </div>
        <div className="card-section">
          <div className="each-card">
            <img src={web} alt="" className="service-icon" />
            <h4>WEB DEVELOPMENT</h4>
            <p>
              CAN CREATE YOUR WEB PRESENCE WITH HtML, CSS, SASS, JAVASCRIPT,
              REACTjs , MONGODB, NODEJS, EXPRESS
            </p>
          </div>
          <div className="each-card">
            <img src={multi} alt="" className="service-icon" />
            <h4>RESPONSIVE DESIGN</h4>
            <p>
              68% of the world population visit website on their smartphones and
              i can Design Apps for all Devices.
            </p>
          </div>
          <div className="each-card">
            <img src={wireframe} alt="" className="service-icon" />
            <h4>PSD TO HTML</h4>
            <p>
              GOT A DESIGN FOR A WEBSITE LET ME HELP YOU TO CONVERT It INTO REAL
              HTML STRUCTURE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
