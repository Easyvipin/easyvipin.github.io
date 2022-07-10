import React from "react";
import { useEffect, useState } from "react";
const CountDown = () => {
  const [calcDays, setDays] = useState("");
  useEffect(() => {
    const diffDays = new Date().getTime() - new Date("2019-8-31").getTime();
    setDays(Math.round(diffDays / (1000 * 60 * 60 * 24)));
  }, [new Date().getDate()]);
  return (
    <div class="Count-down">
      <span className="Days">{calcDays} Days..</span>
    </div>
  );
};

export default CountDown;
