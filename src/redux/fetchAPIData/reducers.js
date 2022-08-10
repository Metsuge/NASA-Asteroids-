import * as actionTypes from "./actionTypes";

const initialAPIState = {
  loading: false,
  error: "",
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
        near_earth_objects: action.payload,
        error: "",
      };
  }
};
