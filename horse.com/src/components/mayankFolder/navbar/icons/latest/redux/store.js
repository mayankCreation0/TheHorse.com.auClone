import { legacy_createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { authReducers } from "./auth.reducers";
import { productsReducers } from "./products.reducers";

const rootReducer = combineReducers({
	auth: authReducers,
	product: productsReducers,
})

// rootReducer.applyMiddleware = legacy_createStore.applyMiddleware;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));




