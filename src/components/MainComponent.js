import React from "react";

import TodayInfo from "./TodayInfo";
import Asteroid from "./Asteroid";
import "./styles/MainComponent.css";

import {useEffect} from "react";
import store from "../redux/store";
import {useSelector, useDispatch} from "react-redux";
import * as actions from "../redux/fetchAPIData/actions";
import {subtractDays, getYear, addDays} from "../sharedFunctions/sharedFunctions.js";

function MainComponent() {
  let option = "today";
  let dates = {
    startDate: "",
    endDate: "",
  };
  const dispatch = useDispatch();
  const getStartEndDates = function () {
    switch (option) {
      case "today":
        return (dates = {
          startDate: subtractDays(new Date(), 1),
          endDate: addDays(new Date(), 1),
        });

      case "tomorrow":
        return getYear(new Date());

      default:
        return;
    }
  };
  getStartEndDates();

  const logCurrentStore = function () {
    const latestStore = store.getState();
    // console.log("latestStore", latestStore);
  };

  const selectData = (state) => state.APIreducer;
  const {
    near_earth_objects,
    APIData,
    prevCurrentNextDayCombined,
    end_date,
    start_date,
    end_date_objects,
    start_date_objects,
  } = useSelector(selectData);
  const fetchData = () => {
    dispatch(actions.fetchAPIRequest());

    (async () => {
      try {
        const data = await fetch(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dates.startDate}&end_date=${dates.endDate}&api_key=MtBjEJEcIVyoShaeySbwXWtKtziVaFlFRMl31i0z`
        );
        const json = await data.json();
        dispatch(actions.fetchAPISuccess(json));
      } catch (error) {
        actions.fetchAPIFailure(error.message);
      }
    })();
  };

  useEffect(() => {
    dispatch(actions.setStartEndDates(dates));
    fetchData();
    store.subscribe(logCurrentStore);
  }, []);

  useEffect(() => {
    let combinedArray = [];
    if (APIData.near_earth_objects) {
      let availableDates = Object.keys(APIData.near_earth_objects);
      for (let i = 0; i < availableDates.length; i++) {
        combinedArray.push(...APIData.near_earth_objects[availableDates[i]]);
      }
    }
    dispatch(actions.combineObjectArrays(combinedArray));
    store.subscribe(logCurrentStore);
    asteroidCoords();
  }, [APIData]);

  //get random number for
  //top: from 5% to 91%
  // left: from 5% to 91%

  const renderAsteroids = function () {
    if (start_date_objects.length > 0) {
      return start_date_objects.map(function (item, i) {
        let asteroidId = `asteroid-${i}`;
        return (
          <div key={i} id={asteroidId} className="asteroid">
            <Asteroid key={i} />
          </div>
        );
      });
    }
    return null;
  };

  // console.log(Math.floor(Math.random() * 91));

  const asteroidCoords = function (param) {
    let topsArray = [];
    if (start_date_objects.length > 0) {
      let lines = 85 / start_date_objects.length;
      for (let i = 0; i < lines - 2; i++) {
        let topValue = 5 + 12 * i;
        topsArray.push(topValue);
      }
    }
    console.log(topsArray);
    // for (let i = 0; i < start_date_objects.length; i++) {
    //   if (document.getElementById(`asteroid-${i}`)) {
    //     let asteroid = document.getElementById(`asteroid-${i}`);
    //     asteroid.style.top = Math.floor(Math.random() * 91) + "%";
    //     asteroid.style.left = Math.floor(Math.random() * 91) + "%";
    //   }
    // }
  };

  //main asteroid has random top % and random left %
  // fucking avoid collitions:
  // divide main div in so many equal squares, of how many asteroids there are in that day
  // start is from top right:
  // top: from 10% to 90%, left: from 10% to 90%;

  return (
    <div id="main-component-div">
      <div>{renderAsteroids()}</div>

      <TodayInfo date={dates.startDate} objects={prevCurrentNextDayCombined}></TodayInfo>
    </div>
  );
}

export default MainComponent;
