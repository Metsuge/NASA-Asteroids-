import {combineReducers} from "redux";
import {APIreducer} from "./fetchAPIData/reducers";

const rootReducer = combineReducers({
  APIreducer,
});

export default rootReducer;
