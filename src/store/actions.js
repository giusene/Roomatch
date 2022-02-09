import axios from 'axios'
import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_ERROR
} from "./constants";

import { backend_URL } from '../libs/functions';

export const loginAction = (loginInput) => {
    return async (dispatch) => {
        dispatch({type: FETCH_LOGIN_REQUEST})
        try {
            const { data } = await axios.post( backend_URL + '/login', loginInput)
            dispatch({type: FETCH_LOGIN_SUCCESS, payload: data})
        }
        catch(e) {
            dispatch({type: FETCH_LOGIN_ERROR, payload: e })
        }
    }
}

