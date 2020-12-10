import Axios from "axios";
import { ADD_DATA } from "./userTypes";

export const addData = (data) => {
    return {
        type: ADD_DATA,
        payload: data,
    };
};

export const fetchData = () => async (dispatch) => {
    const { data } = await Axios.get(
        "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch(addData(data));
};
