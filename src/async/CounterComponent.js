import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addNumber, reduceNumber} from "./counterAction";
class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      number: 2,
    };
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }
  onChangeNumber(event) {
    this.setState({
      number: event.target.value,
    });
  }
  render() {
    const {number} = this.state;
    const {count, addNumber, reduceNumber} = this.props;
    return (
      <div style={{textAlign: "center"}}>
        <p>
          the current result is :<span>{count}</span>
        </p>
        <input type="text" value={number} onChange={this.onChangeNumber} />
        <input
          type="button"
          onClick={() => {
            addNumber(number);
          }}
          value="+"
        />
        <input
          type="button"
          onClick={() => {
            reduceNumber(number);
          }}
          value="-"
        />
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
