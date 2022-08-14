import "./styles/today.css";
import React, {useEffect} from "react";
import LastApproach from "./LastApproach";
import NextApproach from "./NextApproach";
import {liveClock, getFormattedDate} from "../sharedFunctions/sharedFunctions.js";

function TodayInfo({date, objects}) {
  let CurrentTime = Date.now();
  let pastApproaches = [];
  let nextApproachList = [];
  let nextApproach, lastApproach;
  if (objects[0]) {
    //sort given array of approaches by time from earliest to latest
    const sorted = Array.from(objects).sort(
      (x, y) =>
        x.close_approach_data[0].epoch_date_close_approach -
        y.close_approach_data[0].epoch_date_close_approach
    );

    //check witch approaches have gone and witch are coming UTC
    // relative to current time UTC
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i].close_approach_data[0].epoch_date_close_approach < CurrentTime) {
        pastApproaches.push(sorted[i]);
      } else {
        nextApproachList.push(sorted[i]);
      }
    }
  }

  if (nextApproachList[0] && pastApproaches[pastApproaches.length - 1]) {
    nextApproach = [
      {
        date: getFormattedDate(
          new Date(nextApproachList[0].close_approach_data[0].epoch_date_close_approach)
        ),
        miss_distance: nextApproachList[0].close_approach_data[0].miss_distance.kilometers,
        relative_velocity:
          nextApproachList[0].close_approach_data[0].relative_velocity.kilometers_per_hour,

        isHazardous: nextApproachList[0].is_potentially_hazardous_asteroid,
        name: nextApproachList[0].name,
        orbiting_body: nextApproachList[0].close_approach_data[0].orbiting_body,
      },
    ];

    lastApproach = [
      {
        date: getFormattedDate(
          new Date(
            pastApproaches[
              pastApproaches.length - 1
            ].close_approach_data[0].epoch_date_close_approach
          )
        ),
        miss_distance:
          pastApproaches[pastApproaches.length - 1].close_approach_data[0].miss_distance.kilometers,
        relative_velocity:
          pastApproaches[pastApproaches.length - 1].close_approach_data[0].relative_velocity
            .kilometers_per_hour,
        isHazardous: pastApproaches[pastApproaches.length - 1].is_potentially_hazardous_asteroid,
        name: pastApproaches[pastApproaches.length - 1].name,
        orbiting_body:
          pastApproaches[pastApproaches.length - 1].close_approach_data[0].orbiting_body,
      },
    ];
  }

  setInterval(function () {
    liveClock("clock");
  }, 1000);

  return (
    <div id="today-main-div">
      <div id="today-text">
        TODAY
        <div id="clock"></div>
      </div>
      <LastApproach lastApproach={lastApproach}></LastApproach>
      <NextApproach nextApproach={nextApproach}></NextApproach>
    </div>
  );
}

export default TodayInfo;
