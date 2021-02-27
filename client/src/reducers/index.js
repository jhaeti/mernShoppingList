import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { itemReducer } from "./itemReducer";

export const rootReducer = combineReducers({
  item: itemReducer,
  auth: authReducer,
});
