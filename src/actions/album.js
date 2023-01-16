import axios from "axios";

import { GET_ALBUMS } from "./types";

export const getAlbums = () => async dispatch => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums");

        dispatch({
            type: GET_ALBUMS,
            payload: res.data
        });
    } catch (err) {
        //tobe done
    }
}
