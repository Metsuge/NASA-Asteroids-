import "./styles/today.css";
import React from "react";
import LastApproach from "./LastApproach";
import NextApproach from "./NextApproach";

function TodayInfo({date, objects}) {
  return (
    <div id="today-main-div">
      <div id="today-text">TODAY {date}</div>
      <LastApproach></LastApproach>
      <NextApproach></NextApproach>
    </div>
  );
}

export default TodayInfo;
