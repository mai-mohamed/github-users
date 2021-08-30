import { combineReducers } from "redux";
import usersReducer from "./Users/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
