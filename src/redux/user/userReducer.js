import { ADD_USER, REMOVE_USER, AUTH_USER } from "./userTypes";

const INITIAL_STATE = {
    user: null,
    data: [],
};

const user = (state = INITIAL_STATE, action) => {
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
        default:
            return state;
    }
};

export default user;
