import "./styles/nextApproach.css";
import React from "react";

function NextApproach({ nextApproach }) {
	let IsHazardous;
	IsHazardous = nextApproach[0].IsHazardous ? "YES!" : "Nah...";
	let missDistance = Math.floor(nextApproach[0].miss_distance);
	return (
		<div id="nextAprroach-main-div">
			<div id="background-image"></div>
			<div className="child-item" id="text-div">
				<div id="">Next aprroach near Earth by object: {nextApproach[0].name}</div>
				<div>On {nextApproach[0].date}</div>
				<div>Is potentially hazardous? {IsHazardous} </div>
				<div>It's going to pass Earth by {missDistance} kilometers</div>
			</div>
		</div>
	);
}

export default NextApproach;
