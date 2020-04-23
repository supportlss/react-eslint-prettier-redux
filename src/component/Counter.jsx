import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addNumberAction, reduceNumberAction} from "./counterActions";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log(props);
  }

  inputChange = e => {
    const number = e.target.value;
    this.setState({number});
  };

  render() {
    const {count, addNumberAction, reduceNumberAction} = this.props;
    const {number} = this.state;
    return (
      <div>
        <p>The current value: {count}</p>
        <input type="text" value={number} onChange={this.inputChange} />
        <button onClick={() => addNumberAction(number)}>+</button>
        <button onClick={() => reduceNumberAction(number)}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}
function bindDispatchAndAction(dispatch) {
  return bindActionCreators({addNumberAction, reduceNumberAction}, dispatch);
}

export default connect(mapStateToProps, bindDispatchAndAction)(Counter);
