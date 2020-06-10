import {ADD_NUMBER, REDUCE_NUMBER, MULTIPLE_NUMBER} from "./actionsType";

const initialState = {
  count: 0,
};

function countReducer(state = initialState, actions) {
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
    case MULTIPLE_NUMBER:
      return {
        ...state,
        count: state.count * parseInt(actions.number, 10),
      };
    default:
      return state;
  }
}

export default countReducer;
