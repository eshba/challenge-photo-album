import { GET_ALBUMS } from "../actions/types";

const initialState = {
    albums: [],
    error: {}
};

function albumReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_ALBUMS:
            return {
                ...state,
                albums: payload,
            }
        default:
            return state;
    }

}

export default albumReducer;