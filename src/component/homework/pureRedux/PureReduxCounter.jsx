import React from "react";
import {createStore} from "redux";

const ADD_NUMBER = "ADD_NUMBER";
const REDUCE_NUMBER = "REDUCE_NUMBER";

const initialState = {
  count: 0,
};

//define actions
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
//define reducer
function counterReducer(state = initialState, actions) {
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

//define store
const store = createStore(counterReducer);

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      count: 0,
    };
    this.inputOnChange = this.inputOnChange.bind(this);
  }

  inputOnChange = e => {
    console.log(e);
    const value = e.target.value;
    this.setState({
      number: value,
    });
  };

  componentDidMount() {
    store.subscribe(() => {
      const count = store.getState().count;
      console.log(store.getState());
      this.setState({
        count: count,
      });
    });
  }

  render() {
    const {number, count} = this.state;
    return (
      <>
        <div className="result">Result is: {count}</div>
        <input type="text" value={number} onChange={this.inputOnChange} />
        <input
          type="button"
          value="+"
          onClick={() => {
            store.dispatch(addNumber(number));
          }}
        />
        <input
          type="button"
          value="-"
          onClick={() => {
            store.dispatch(reduceNumber(number));
          }}
        />
      </>
    );
  }
}
