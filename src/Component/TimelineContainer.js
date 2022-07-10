import React from "react";

const TimelineContainer = ({ pos, date, desc, challenges }) => {
  return (
    <div className={`container-${pos}`}>
      <div className="content-timeline">
        <h5>{date}</h5>
        <p>{desc}</p>
        {challenges ? (
          <>
            <span className="challanges">#100DaysOfCode</span>
            <span className="challanges">#30DaysOfReact</span>{" "}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TimelineContainer;
