import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addNumber, reduceNumber} from "./CounterActions";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
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

  render() {
    const {count, addNumber, reduceNumber} = this.props;
    const {number} = this.state;
    return (
      <>
        <div className="result">Result is: {count}</div>
        <input type="text" value={number} onChange={this.inputOnChange} />
        <input
          type="button"
          value="+"
          onClick={() => {
            addNumber(number);
          }}
        />
        <input
          type="button"
          value="-"
          onClick={() => {
            reduceNumber(number);
          }}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addNumber, reduceNumber}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
