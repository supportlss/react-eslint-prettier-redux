import React, {Component} from "react";
import {createStore} from "redux";
const ADD_NUMBER = "ADD_NUMBER";
const REDUCE_NUMBER = "REDUCE_NUMBER";
const initialState = {
  count: 0,
};
function countReducer(state = initialState, actions) {
  switch (actions.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + parseInt(actions.number, 10),
      };
    case REDUCE_NUMBER:
      return {
        ...state,
        count: state.count - parseInt(actions.number, 10),
      };
    default:
      return state;
  }
}
function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number,
  };
}
function reduceNumber(number) {
  return {
    type: REDUCE_NUMBER,
    number,
  };
}
const store = createStore(countReducer);
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      number: 2,
    };
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        count: store.getState().count,
      });
    });
  }
  onChangeNumber(event) {
    this.setState({
      number: event.target.value,
    });
  }
  render() {
    const {count, number} = this.state;
    return (
      <div style={{textAlign: "center"}}>
        <p>
          the current result is :<span>{count}</span>
        </p>
        <input type="text" value={number} onChange={this.onChangeNumber} />
        <input
          type="button"
          onClick={() => {
            store.dispatch(addNumber(number));
          }}
          value="+"
        />
        <input
          type="button"
          onClick={() => {
            store.dispatch(reduceNumber(number));
          }}
          value="-"
        />
      </div>
    );
  }
}
