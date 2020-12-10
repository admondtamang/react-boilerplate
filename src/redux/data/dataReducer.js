import { ADD_DATA } from "./userTypes";
const INITIAL_STATE = {
  data: [],
};

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default data;
