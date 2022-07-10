import React from "react";
import { gsap } from "gsap";
import clipVid from "../Images/video2.mp4";

const Intro = ({ toggleView }) => {
  const nameRef = React.useRef();
  const wishRef = React.useRef();
  const introRef = React.useRef();
  const profRef = React.useRef();
  const ideaRef = React.useRef();
  const workRef = React.useRef();

  const handleNext = () => {
    const timeline = gsap.timeline();
    timeline
      .to([introRef.current], {
        duration: 2,
        x: "-100%",
        ease: "power",
      })
      .add(toggleView(true));
  };

  React.useEffect(() => {
    const timeline = gsap.timeline({ default: { duration: 1 } });
    timeline
      .from([introRef.current], {
        duration: 1,
        "-webkit-filter": "blur(" + 10 + "px" + ")",
        filter: "blur(" + 80 + "px" + ")",
      })
      .from([nameRef.current], {
        duration: 2,
        opacity: 0,
        y: "100%",
        ease: "back",
      })
      .from([profRef.current], {
        duration: 1,
        scale: 2,
        opacity: 0,
        ease: "back",
      })
      .from(".next", {
        duration: 1,
        rotation: 360,
        opacity: 0,
        ease: "back",
      });
  });

  return (
    <div ref={introRef} className="intro">
      <video loop autoPlay muted className="videoBox">
        <source src={clipVid} type="video/mp4" />
      </video>

      <div class="content-intro">
        <div className="name" ref={nameRef}>
          Vipin.
        </div>
        <h2 id="pos" ref={profRef}>
          FRONT END DEVELOPER
        </h2>
        <button className="next" onClick={handleNext}>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Intro;
