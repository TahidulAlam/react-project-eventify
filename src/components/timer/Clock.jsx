/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Clock = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      // setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      // setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div>
      <div className="flex gap-5 justify-center items-center text-3xl p-5">
        <div className="Clock-days border-2 p-3 rounded-lg glass w-[150px]">
          {leading0(days)} Days
        </div>
        <div className="Clock-hours border-2 p-3 rounded-lg glass w-[180px]">
          {leading0(hours)} Hours
        </div>
        <div className="Clock-minutes border-2 p-3 rounded-lg glass w-[200px]">
          {leading0(minutes)} Minutes
        </div>
        {/* <div className="Clock-seconds border-2 p-3 rounded-lg glass w-[220px]">
          {leading0(seconds)} Seconds
        </div> */}
      </div>
    </div>
  );
};

export default Clock;
