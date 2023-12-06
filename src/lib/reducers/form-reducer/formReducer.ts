export const INITIALINPUTS = {
  task: "",
  date: "",
};

export const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "CLEAR_INPUTS":
      return { [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
