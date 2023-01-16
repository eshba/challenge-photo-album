import { GET_ALBUMS } from "../actions/types";

const initialState = {
    albums: [],
    loading: true,
    error: {}
};

function albumReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_ALBUMS:
            return {
                ...state,
                albums: payload,
                loading: false
            }
        default:
            return state;
    }

}

export default albumReducer;