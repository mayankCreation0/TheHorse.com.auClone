import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./action";

const initialState = {
	isAuth: false,
	token: "",
	error: ""
}
export const authReducers = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_SUCCESS:
			return {
				isAuth: true,
				token: payload
			}

		case LOGIN_FAILURE:
			return {
				isAuth: false,
				token: "",
				error: payload
			}

		case LOGOUT:
			return initialState;

		default:
			return state;
	}
}

