import * as actionTypes from "./actionTypes";

const initialAPIState = {
  loading: false,
  error: "",
  APIData: {},
  near_earth_objects: {},
  start_date: "",
  end_date: "",
  start_date_objects: "",
  end_date_objects: "",
};

export const APIreducer = (state = initialAPIState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_API_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_API_SUCCESS:
      return {
        ...state,
        loading: false,
        APIData: action.payload,
        near_earth_objects: action.payload.near_earth_objects,
        start_date_objects: action.payload.near_earth_objects[state.start_date],
        end_date_objects: action.payload.near_earth_objects[state.end_date],
        error: "",
      };

    case actionTypes.FETCH_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.SET_START_END_DATES:
      return {
        ...state,
        start_date: action.payload.startDate,
        end_date: action.payload.endDate,
      };

    default:
      return state;
  }
};
