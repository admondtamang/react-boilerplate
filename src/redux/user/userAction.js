import Axios from "axios";
import { ADD_USER, REMOVE_USER, AUTH_USER } from "./userTypes";

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
};
export const authUser = () => {
    return {
        type: AUTH_USER,
    };
};

export const removeUser = (user) => {
    return {
        type: REMOVE_USER,
        payload: user,
    };
};

export const fetchUsers = (user) => async (dispatch) => {
    dispatch(authUser());
    await Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const users = response.data;
            console.log("Api user", users[0].username);
            console.log("User Input :", user.username);
            users.map((apiUser) =>
                apiUser.username === user.username
                    ? dispatch(addUser(users[0]))
                    : console.log("Invalid  ")
            );
        })
        .catch((error) => {
            console.log(error);
        });
};
