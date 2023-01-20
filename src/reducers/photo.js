import { GET_PHOTOS, LOAD_PHOTO, REMOVE_PHOTO } from "../actions/types";

const initialState = {
    photo: null,
    photos: [],
    error: {}
}

function photoReducer(state = initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case GET_PHOTOS:
            return {
                ...state,
                photos: payload,
            }
        case LOAD_PHOTO:
        case REMOVE_PHOTO:
            return {
                ...state,
                photo: payload,
            }
        default:
            return state;
    }

}

export default photoReducer;