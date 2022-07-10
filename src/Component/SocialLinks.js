import React from "react";
import twitter from "../Images/twitter.svg";
import github from "../Images/github.svg";
import Dev from "../Images/dev.png";
import hash from "../Images/hashnode.png";
import { gsap } from "gsap";

const SocialLinks = () => {
  const socialRef = React.useRef();
  React.useEffect(() => {
    const timeline = gsap.timeline();
    timeline.from(".social-one", {
      duration: 1,
      y: "-100%",
      rotateX: 100,
      rotateY: 300,
      ease: "power",
    });
  });
  return (
    <div class="Social">
      <div ref={socialRef} className="social-one">
        <a href="" target="blank">
          <img src={github} alt="" />
        </a>
        <a href="" target="blank">
          <img src={twitter} alt="" />
        </a>
        <a href="https://dev.to/easyvipin" target="blank">
          <i class="fab fa-dev" title="easyvipin's DEV Community Profile"></i>
        </a>
      </div>
      <div className="other-social">
        <ul class="social-links">
          <li className="social-item">
            <a href="https://in.linkedin.com/in/easyvipin" target="blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="social-item">
            &copy;easyvipin <span className="rocket">&#x1F680;</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
