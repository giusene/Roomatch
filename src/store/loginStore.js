import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk'

import loginReducer from './loginReducer'

const defaultStore = {
    logged: false,
    loading: false
}

export const store = createStore(loginReducer, defaultStore, compose(applyMiddleware(thunk)))