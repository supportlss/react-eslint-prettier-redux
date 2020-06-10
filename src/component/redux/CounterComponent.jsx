import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addNumber, multipleNumber, reduceNumber} from "./counterActions";

class counterElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }

  onChangeNumber(event) {
    this.setState({
      number: event.target.value,
    });
  }

  render() {
    const {count, addNumber, reduceNumber, multipleNumber} = this.props;
    const {number} = this.state;
    return (
      <div>
        <p>
          the current result is:&nbsp;&nbsp;
          {count}
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
        <input
          type="button"
          onClick={() => {
            multipleNumber(number);
          }}
          value="*"
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
  return bindActionCreators({addNumber, reduceNumber, multipleNumber}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(counterElement);
