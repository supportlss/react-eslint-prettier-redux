import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "./store.js";
// import PureReduxCounter from "./component/sample/pureRedux/PureReduxCounter";
// import CounterComponent from "./component/sample/React-redux/CounterComponent";
// import UserListComponent from "./component/sample/Async-Redux/UserListComponent.jsx";
// import PureReduxCounter from "./component/homework/pureRedux/PureReduxCounter.jsx";
import CounterComponent from "./component/homework/React-Redux/CounterComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
      </div>
    </Provider>
    // {/* <PureReduxCounter /> */}
  );
}

export default App;
