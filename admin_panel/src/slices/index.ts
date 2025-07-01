import { combineReducers } from "@reduxjs/toolkit";
import LayoutReducer from "./layouts/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
});

export default rootReducer;

