import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk'

import LoginReducer from './loginReducer'

const defaultStore = {
    logged: true,
    loading: false
}

export const store = createStore(LoginReducer, defaultStore, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))