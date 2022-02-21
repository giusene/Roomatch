import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_ERROR,
  FETCH_LOGOUT_REQUEST,
  FETCH_LOGOUT_SUCCESS,
  FETCH_LOGOUT_ERROR
} from "./constants";

const defaultStore = {
  logged: false,
  loading: false,
};

const loginReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_LOGIN_SUCCESS:
      return {
        logged: true,
        loading: false,
        user: action.payload,
      };

    case FETCH_LOGIN_ERROR:
      return {
        logged: false,
        loading: false,
        error: action.payload,
      };

    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_UPDATE_SUCCESS:
      return {
        logged: true,
        loading: false,
        user: action.payload,
      };

    case USER_UPDATE_ERROR:
      return {
        ...state,
        logged: true,
        loading: false,
      };

    case FETCH_LOGOUT_REQUEST:
      return {
        logged: false,
        loading: false,
      };

    case FETCH_LOGOUT_SUCCESS:
      return {
        logged: false,
        loading: false,
      };

    case FETCH_LOGOUT_ERROR:
      return {
        logged: true,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
