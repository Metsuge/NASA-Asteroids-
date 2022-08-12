import "./styles/nextApproach.css";
import React from "react";

function NextApproach({nextApproach}) {
  return (
    <div className="child-item" id="nextAprroach-main-div">
      <div>Next aprroach near Earth by object: {nextApproach} </div>
      <div>Is potentially hazardous? </div>
    </div>
  );
}

export default NextApproach;
