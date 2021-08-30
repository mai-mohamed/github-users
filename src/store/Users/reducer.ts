import { Action, IUsers } from "./IAction";
import * as types from "./types";

const INITIAL_STATE: IUsers = {
  allUsers: [],
};
export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};
