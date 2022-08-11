import * as actionTypes from "./actionTypes";

export const fetchAPIRequest = () => {
  return {
    type: actionTypes.FETCH_API_REQUEST,
  };
};

export const fetchAPISuccess = (APIData) => {
  return {
    type: actionTypes.FETCH_API_SUCCESS,
    payload: APIData,
  };
};

export const fetchAPIFailure = (error) => {
  return {
    type: actionTypes.FETCH_API_FAILURE,
    payload: error,
  };
};

export const setStartEndDates = (dates) => {
  return {
    type: actionTypes.SET_START_END_DATES,
    payload: dates,
  };
};
