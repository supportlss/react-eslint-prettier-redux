import React from "react";
import "./App.css";
import Counter from "./component/Counter";
import store from "./store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <p>hello, please import you component in App.js, then it will appear here</p> */}
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
