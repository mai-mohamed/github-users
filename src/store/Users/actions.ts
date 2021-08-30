import {
  GetAllUsers,
  FetchUsersSuccessPayload,
  FetchUsersSuccess,
  getFilteredDataPayload,
  getFilteredData,
} from "./IAction";
import * as types from "./types";

export const getAllUsers = (): GetAllUsers => ({
  type: types.GET_ALL_USERS,
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: types.FETCH_USERS_SUCCESS,
  payload,
});

export const getFilteredDataAction = (
  payload: getFilteredDataPayload
): getFilteredData => ({
  type: types.GET_FILTERED_DATA,
  payload,
});
