import {ADD_NUMBER, REDUCE_NUMBER} from "./actionType";

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + parseInt(action.number, 10),
      };

    case REDUCE_NUMBER:
      return {
        ...state,
        count: state.count - parseInt(action.number, 10),
      };

    default:
      return state;
  }
};
