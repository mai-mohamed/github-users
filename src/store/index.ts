import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./baseReducer";
import baseSaga from "./baseSaga";

const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" &&
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(saga));
const store = createStore(reducers, enhancer);

saga.run(baseSaga);

export default store;
