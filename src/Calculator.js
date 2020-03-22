import React from "react";
import "./Calculator.css";
import {connect} from "react-redux";

const funs = ["+", "-", "*", "/", "c", "="];
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Action(props) {
  return (
    <div className="action">
      {props.funs.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              props.click(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

function Number(props) {
  return (
    <div className="number">
      {props.nums.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              props.click(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

class Calculator extends React.Component {
  render() {
    const {inputValue, result, actionClick, numClick} = this.props;
    return (
      <div className="wrap">
        <input value={inputValue} readOnly />
        <div className="result">{result}</div>
        <Action funs={funs} click={actionClick} />
        <Number nums={nums} click={numClick} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputValue: state.reducer.inputValue,
    result: state.reducer.result,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    numClick(e) {
      const action = {
        type: "input_number_add",
        value: e,
      };
      dispatch(action);
    },
    actionClick(e) {
      if (e === "c") {
        const action = {
          type: "clear_input_value",
        };
        dispatch(action);
        return;
      }
      if ("=" === e) {
        const action = {
          type: "action_number_result",
        };
        dispatch(action);
        return;
      }
      const action = {
        type: "input_number_add",
        value: e,
      };
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
