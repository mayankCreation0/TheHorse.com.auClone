import { PRODUCT_FAILURE, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./action";

const initialState = {
	products: [],
	product: {},
	loading: false,
	error: ""
}

export const productsReducers = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case PRODUCT_LIST_REQUEST:
			return {
				...state,
				loading: true
			}

		case PRODUCT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				products: payload
			}

		case PRODUCT_LIST_FAILURE:
			return {
				...state,
				loading: false,
				error: payload
			}

		case PRODUCT_REQUEST:
			return {
				...state,
				loading: true
			}

		case PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				product: payload
			}

		case PRODUCT_FAILURE:
			return {
				...state,
				loading: false,
				error: payload
			}

		default:
			return state;
	}



}