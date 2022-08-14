import React from "react";

import TodayInfo from "./TodayInfo";
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
  }, [APIData]);
  return (
    <div id="main-component-div">
      <TodayInfo date={dates.startDate} objects={prevCurrentNextDayCombined}></TodayInfo>
    </div>
  );
}

export default MainComponent;
