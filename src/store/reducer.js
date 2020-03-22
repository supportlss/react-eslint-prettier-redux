const defaultState = {
  inputValue: "",
  result: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "input_number_add":
      const addState = JSON.parse(JSON.stringify(state));
      addState.inputValue = addState.inputValue + action.value;
      return addState;
    case "clear_input_value":
      const clearState = JSON.parse(JSON.stringify(state));
      clearState.inputValue = "";
      clearState.result = "";
      return clearState;
    case "action_number_result":
      const resultState = JSON.parse(JSON.stringify(state));
      try {
        // eslint-disable-next-line no-eval
        resultState.result = eval(resultState.inputValue);
      } catch (error) {
        resultState.result = "格式错误，请重新输入";
      }
      resultState.inputValue = "";
      return resultState;
    default:
      return state;
  }
};
