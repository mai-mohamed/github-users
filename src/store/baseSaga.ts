import { all } from "redux-saga/effects";
import usersSaga from "./Users/saga";

export default function* baseSaga() {
  yield all([usersSaga()]);
}
