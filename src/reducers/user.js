import { GET_USERS } from "../actions/types";

const initialState = {
    users: [],
    loading: true,
    error: {}
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        default:
            return state;
    }
}

export default userReducer;