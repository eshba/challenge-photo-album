import axios from "axios";

import { GET_USERS } from "./types";

export const getUsers = () => async dispatch => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    } catch (err) {
        //tobe done
    }
}