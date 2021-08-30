import * as types from "./types";

export interface IUserModel {
  login: string;
  url: string;
  avatar_url: string;
  type: string;
  id: number;
}

export interface GetAllUsers {
  type: typeof types.GET_ALL_USERS;
}

export interface FetchUsersSuccessPayload {
  users: [];
}
export type FetchUsersSuccess = {
  type: typeof types.FETCH_USERS_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export interface getFilteredDataPayload {
  data: string;
}
export type getFilteredData = {
  type: typeof types.GET_FILTERED_DATA;
  payload: getFilteredDataPayload;
};

export interface IUsers {
  allUsers: IUserModel[];
}

export type Action = GetAllUsers | FetchUsersSuccess;
