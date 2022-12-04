import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./action";

const url = 'http://localhost:3002/products';
const fetchProducts = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_LIST_REQUEST });
		const { data } = await axios.get(url);
		console.log('fetching products', data);
		dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
	} catch (error) {
		console.log(error.message)
		dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
	}
}

const fetchProduct = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_REQUEST });
		const { data } = await axios.get(`${url}/${id}`);
		dispatch({ type: PRODUCT_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_FAILURE, payload: error.message });
	}
}

export { fetchProducts, fetchProduct };