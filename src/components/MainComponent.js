import React from "react";

import TodayInfo from "./TodayInfo";
import "./styles/MainComponent.css";

import {useEffect} from "react";
import store from "../redux/store";
import {useSelector, useDispatch} from "react-redux";
import * as actions from "../redux/fetchAPIData/actions";

function MainComponent(props) {
  const dispatch = useDispatch();

  const logCurrentStore = function () {
    const latestStore = store.getState();
    // console.log("latestStore", latestStore);
  };
  let dates = {
    startDate: "2022-08-12",
    endDate: "2022-08-13",
  };

  const selectData = (state) => state.APIreducer;
  const {near_earth_objects, APIData, end_date, start_date, end_date_objects, start_date_objects} =
    useSelector(selectData);

  const fetchData = () => {
    dispatch(actions.setStartEndDates(dates));
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
    fetchData();
    store.subscribe(logCurrentStore);
  }, []);

  // console.log("CurrentTime", CurrentTime);

  useEffect(() => {
    // sort out the api in separate objects in the store
    // if (APIData && start_date_objects[0]) {
    //   const sorted = Array.from(start_date_objects).sort(
    //     (x, y) =>
    //       x.close_approach_data[0].close_approach_date_full -
    //       y.close_approach_data[0].close_approach_date_full
    //   );
    //   let nextApproachList = [];
    //   for (let i = 0; i < sorted.length; i++) {
    //     if (sorted[i].close_approach_data[0].epoch_date_close_approach < CurrentTime) {
    //     } else {
    //       nextApproachList.push(sorted[i]);
    //     }
    //   }
    //   // first object in the list of next approach
    //   let nextApproach = new Date(
    //     nextApproachList[0].close_approach_data[0].epoch_date_close_approach
    //   );
    // }
  }, [APIData]);

  return (
    <div id="main-component-div">
      <TodayInfo date={dates.startDate} objects={start_date_objects}></TodayInfo>
    </div>
  );
}

export default MainComponent;
