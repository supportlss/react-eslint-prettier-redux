import * as postType from "./postType";
const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};
function postReducer(state = initialState, action) {
  switch (action.type) {
    case postType.INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case postType.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,
        lastUpdated: action.receivedAt,
      });
    case postType.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    default:
      return state;
  }
}
export default postReducer;
