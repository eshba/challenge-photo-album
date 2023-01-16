import axios from "axios";

import { GET_PHOTOS, LOAD_PHOTO, REMOVE_PHOTO } from "./types";

export const getPhotos = (albumId) => async dispatch => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);

        dispatch({
            type: GET_PHOTOS,
            payload: res.data
        });
    } catch (err) {
        //tobe done
    }
}

export const loadPhoto = (photo) => dispatch => {
    try {
        dispatch({
            type: LOAD_PHOTO,
            payload: photo
        })
    } catch (err) {
        //tobe done
    }
}

export const removePhoto = () => dispatch => {
    try {
        dispatch({
            type: REMOVE_PHOTO,
            payload: null
        })
    } catch (err) {
        //tobe done
    }
}