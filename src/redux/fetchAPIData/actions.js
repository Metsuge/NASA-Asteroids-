import * as actionTypes from "./actionTypes";

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
