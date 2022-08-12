import "./styles/lastApproach.css";
import React from "react";

function LastApproach({lastApproach}) {
  return (
    <div className="child-item" id="lastAprroach-main-div">
      <div>Last aprroach near Earth by object: {lastApproach} </div>
    </div>
  );
}

export default LastApproach;
