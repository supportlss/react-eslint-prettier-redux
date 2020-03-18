import {createStore, combineReducers, applyMiddleware} from "redux";
import countReducer from "./async/counterReducer";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-thunk";
import postReducer from "./async/postReducer";

const store = createStore(
  combineReducers({
    counter: countReducer,
    post: postReducer,
  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
export default store;
