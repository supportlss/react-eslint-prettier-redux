import {ADD_NUMBER, REDUCE_NUMBER} from "./actionType";

function addNumberAction(number) {
  return {
    type: ADD_NUMBER,
    number,
  };
}

function reduceNumberAction(number) {
  return {
    type: REDUCE_NUMBER,
    number,
  };
}

export {addNumberAction, reduceNumberAction};
