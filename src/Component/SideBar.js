import React from "react";
import Navlinks from "./Navlinks";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";
import { gsap } from "gsap";

const SideBar = ({ toggleMenu }) => {
  const sideRef = React.useRef();

  React.useEffect(() => {
    gsap.from(".sideBar", {
      duration: 1,
      ease: "power",
    });
  });
  return (
    <section ref={sideRef} className="sideBar">
      <Profile />
      <Navlinks toggleMenu={toggleMenu} />
      <SocialLinks />
    </section>
  );
};

export default SideBar;
