import axios from 'axios'
import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_ERROR
} from "./constants";

export const loginAction = (loginInput) => {
    return async (dispatch) => {
        dispatch({type: FETCH_LOGIN_REQUEST})
        try {
            const {data: user} = await axios.post('https://roomatch0.herokuapp.com/login', loginInput)
            dispatch({type: FETCH_LOGIN_SUCCESS, payload: user})
        }
        catch(e) {
            dispatch({type: FETCH_LOGIN_ERROR, payload: e })
        }
    }
}

