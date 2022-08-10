import {configureStore} from "@reduxjs/toolkit";
// import APIreducer from "./fetchAPIData/APIreducer";

import rootReducer from "./rootReducer";
// one state with all reducers merged into one ROOT REDUCER

const store = configureStore({reducer: rootReducer});

export default store;
