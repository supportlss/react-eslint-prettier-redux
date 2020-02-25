import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import CounterComponent from "./reactRedux/CounterComponent";
import store from "./store";
import UserListComponent from "./Async-Redux/UserListComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">  
        <CounterComponent />
        <UserListComponent />
      </div>
    </Provider>
    
  );
}

export default App;
