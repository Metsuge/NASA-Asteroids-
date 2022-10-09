import "./styles/nextApproach.css";
import React from "react";

function NextApproach({nextApproach}) {
  let IsHazardous = nextApproach[0].IsHazardous ? "YES!" : "Nah...";
  return (
    <div className="child-item" id="nextAprroach-main-div">
      <div id="">Next aprroach near Earth by object: {nextApproach[0].date}</div>
      <div>Is potentially hazardous?  {IsHazardous} </div>
    </div>
  );
}

export default NextApproach;
