import {ADD_NUMBER, REDUCE_NUMBER} from "./ActionTypes";

const initialState = {
  count: 0,
};

//define reducer
export default function counterReducer(state = initialState, actions) {
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
