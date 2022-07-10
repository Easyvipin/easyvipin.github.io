import React from "react";
import TimelineContainer from "./TimelineContainer";
import timeline from "../Images/timeline.png";
import learning from "../Images/learning.png";
import CountDown from "./CountDown";
const Timeline = () => {
  return (
    <section className="timeline">
      <CountDown />
      <img src={timeline} alt="" className="timeline-img img-center" />
      <h2>Developement Timeline</h2>
      <div className="timeline-container">
        <TimelineContainer
          pos={"left"}
          date={"Aug 2019"}
          desc="Completed Graduation in Bsc(Information Technology)"
        />
        <TimelineContainer pos={"right"} />
        <TimelineContainer pos={"left"} />
        <TimelineContainer pos={"right"} />
        <TimelineContainer pos={"left"} />
      </div>
      <img src={learning} className="learn-img" alt="" />
      <button class="learn-btn">Learning...</button>
    </section>
  );
};

export default Timeline;
