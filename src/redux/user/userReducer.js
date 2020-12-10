// import Axios from "axios";
// import { addUser } from "./userAction";
import { ADD_USER, REMOVE_USER, AUTH_USER, ADD_DATA } from "./userTypes";

const INITIAL_STATE = {
  user: null,
  data: [],
};

const cartItems = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };

    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    case AUTH_USER:
      return { ...state };
    case ADD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default cartItems;
