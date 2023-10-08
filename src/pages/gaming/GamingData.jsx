/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GamingCard from "./GamingCard";

const GamingData = ({ data }) => {
  const [gdata, setGdata] = useState({});
  const { gamingTournamentSetup } = data;
  useEffect(() => {
    setGdata(gamingTournamentSetup);
  }, [gamingTournamentSetup]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 p-5">
        {Array.isArray(gdata) ? (
          gdata?.map((item, index) => (
            <GamingCard key={index} Gametourdata={item}></GamingCard>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default GamingData;
