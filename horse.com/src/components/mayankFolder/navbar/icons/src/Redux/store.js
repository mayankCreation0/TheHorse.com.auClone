import {legacy_createStore as createStore,combineReducers} from 'redux'
import { authReducer } from './authReducer'
import { productReducer } from './productReducer'

const combineReducer=combineReducers({
    authReducer,
    productReducer,
})

export const store =createStore(combineReducer);