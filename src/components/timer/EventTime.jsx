// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import Clock from "./Clock";

// const EventTime = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("../../assets/data/events-data.json");
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   console.log(data);
//   return (
//     <div>
//       <h1>Data:</h1>
//       {data.map((item) => (
//         <Clock key={item.id} timedata={item.event_date}></Clock>
//       ))}
//     </div>
//   );
// };

// export default EventTime;
