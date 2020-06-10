import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import countReducer from "./component/redux/counterReducer";
import {combineReducers} from "redux";

const loggerMiddleware = createLogger();

const store = createStore(
  combineReducers({
    counter: countReducer,
  }),
  applyMiddleware(
    thunkMiddleware, // 拦截异步的action
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
);

export default store;
