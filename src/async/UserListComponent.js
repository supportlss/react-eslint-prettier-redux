import React, {Component} from "react";
import {isEmpty} from "lodash";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchPosts} from "./postAction";
class UserListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  render() {
    const {items, isFetching, fetchPosts} = this.props;
    return (
      <div>
        <button onClick={() => fetchPosts()}>
          {isFetching ? "loading..." : "Request data"}
        </button>
        {!isEmpty(items) && !isFetching && (
          <ul>
            {items.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.post.items,
    isFetching: state.post.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent);
