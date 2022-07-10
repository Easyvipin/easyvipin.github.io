import React from "react";
/* import user from "../Images/user.png";
 */
import { gsap } from "gsap";
import vipin from "../Images/vipin.png";

const Profile = () => {
  React.useEffect(() => {
    const timelineOne = gsap.timeline();
    timelineOne.from(".profile-img", {
      duration: 1,
      x: "-200%",
      rotateY: 300,
      delay: 1,
      ease: "back",
    });
  });

  return (
    <div className="profile">
      <img className="profile-img" src={vipin} alt="" />
      <h4>Vipin Chandra</h4>
    </div>
  );
};

export default Profile;
