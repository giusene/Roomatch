import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_ERROR
} from "./constants";

const defaultStore = {
    logged: true,
    loading: false
}

const loginReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_LOGIN_SUCCESS:
            return {
                logged: true,
                loading: false,
                user: action.payload
            }

        case FETCH_LOGIN_ERROR:
            return {
                logged: false,
                loading: false,
                error: action.payload
            }

        default:
            return state

    }
}

export default loginReducer