import axios from "axios";
import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR

} from "./constants";

import { backend_URL } from "../libs/functions";

export const loginAction = (loginInput) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LOGIN_REQUEST });
    try {
      const { data } = await axios.post(backend_URL + "/login", loginInput);
      dispatch({ type: FETCH_LOGIN_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: FETCH_LOGIN_ERROR, payload: e });
    }
  };
};

export const likeDislike = (body, roomId, type) => {
  return async (dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST });
    try {
      const { data } = await axios.patch(backend_URL + `/rooms/${roomId}/${type}`, body);
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: USER_UPDATE_ERROR, payload: e });
    }
  };
}

export const changeChar = (body, userId) => {
  return async (dispatch) => {
    dispatch({ type: USER_UPDATE_REQUEST });
    try {
      const { data } = await axios.patch(backend_URL + `/users/${userId}`, body);
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: USER_UPDATE_ERROR, payload: e });
    }
  };
}


