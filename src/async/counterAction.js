import {ADD_NUMBER, REDUCE_NUMBER} from "./action";

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number,
  };
}
export function reduceNumber(number) {
  return {
    type: REDUCE_NUMBER,
    number,
  };
}
