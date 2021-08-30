import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "./api";
import * as types from "./types";
import * as actions from "./actions";

function* getAllUsers() {
  try {
    //@ts-ignore
    const response = yield call(api.getAllUsers);
    yield put(actions.fetchUsersSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}

function* getFilteredUsers({ payload }: any) {
  try {
    //@ts-ignore
    const response = yield call(api.getFilteredUsers, payload.data);
    console.log(response);
    yield put(actions.fetchUsersSuccess(response.data.items));
  } catch (error) {
    console.log(error);
  }
}

export default function* usersSaga() {
  yield takeEvery(types.GET_ALL_USERS, getAllUsers);
  yield takeEvery(types.GET_FILTERED_DATA, getFilteredUsers);
}
