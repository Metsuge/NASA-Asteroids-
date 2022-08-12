import "./styles/today.css";
import React, {useEffect} from "react";
import LastApproach from "./LastApproach";
import NextApproach from "./NextApproach";

function TodayInfo({date, objects}) {
  let CurrentTime = Date.now();
  let pastApproaches = [];
  let nextApproachList = [];
  let nextApproach, lastApproach;
  let clock = document.getElementById("clock");

  if (objects[0]) {
    //sort todays approaches by date from earliest to lastest
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

  function getFormattedDate(date) {
    let d = date;

    d =
      d.getFullYear() +
      "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + d.getDate()).slice(-2) +
      " " +
      ("0" + d.getHours()).slice(-2) +
      ":" +
      ("0" + d.getMinutes()).slice(-2);
    // ":" +
    // ("0" + d.getSeconds()).slice(-2);
    return d;
  }

  if (nextApproachList[0] && pastApproaches[pastApproaches.length - 1]) {
    nextApproach = getFormattedDate(
      new Date(nextApproachList[0].close_approach_data[0].epoch_date_close_approach)
    );
    lastApproach = getFormattedDate(
      new Date(
        pastApproaches[pastApproaches.length - 1].close_approach_data[0].epoch_date_close_approach
      )
    );
  }

  function time() {
    var d = new Date();
    let y = d.getFullYear() + "-";
    let month = ("0" + (d.getMonth() + 1)).slice(-2) + "-";
    let day = ("0" + d.getDate()).slice(-2);
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    if (clock) {
      clock.textContent =
        y +
        month +
        day +
        " " +
        ("0" + h).substr(-2) +
        ":" +
        ("0" + m).substr(-2) +
        ":" +
        ("0" + s).substr(-2);
    }
  }

  setInterval(time, 1000);

  return (
    <div id="today-main-div">
      <div id="today-text">
        TODAY {}
        <div id="clock"></div>
      </div>
      <LastApproach lastApproach={lastApproach}></LastApproach>
      <NextApproach nextApproach={nextApproach}></NextApproach>
    </div>
  );
}

export default TodayInfo;
