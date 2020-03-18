import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "./store";
import CounterComponent from "./async/CounterComponent";
import UserListComponent from "./async/UserListComponent";

function App() {
  return (
    <Provider store={store}>
      <CounterComponent />
      <UserListComponent />
    </Provider>
  );
}

export default App;
