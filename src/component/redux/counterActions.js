import {ADD_NUMBER, REDUCE_NUMBER, MULTIPLE_NUMBER} from "./actionsType";

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

export function multipleNumber(number) {
  return {
    type: MULTIPLE_NUMBER,
    number,
  };
}
