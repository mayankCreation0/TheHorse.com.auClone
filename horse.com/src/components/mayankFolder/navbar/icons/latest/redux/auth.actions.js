import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./action";

export const login = (email, password) => async dispatch => {
	try {
		const { data } = await axios.post("https://reqres.in/api/login", { email, password });
		dispatch({ type: LOGIN_SUCCESS, payload: data.token });
	} catch (error) {
		dispatch({ type: LOGIN_FAILURE, payload: error.message });
	}

}

export const logout = () => dispatch => { dispatch({ type: "logout" }) }


