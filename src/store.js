import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import countReducer from "./reactRedux/counterReducer";
import postReducer from "./Async-Redux/postReducer";
import {combineReducers} from "redux";

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    counter: countReducer,
    post: postReducer,
  }),
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware 
  )
);

export default store;