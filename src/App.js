import React from "react";
import "./App.css";
import store from "./store.js";
import {Provider} from "react-redux";
import CounterComponent from "./component/redux/CounterComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
