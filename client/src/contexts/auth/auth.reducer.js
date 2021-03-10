import {
	GET_CURRENT_USER,
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_OUT_FAILURE,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
} from './auth.types.js';

function AuthReducer(state, action) {
	switch (action.type) {
		case GET_CURRENT_USER:
		case SIGN_UP_SUCCESS:
		case SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		case SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null,
			};
		case SIGN_IN_FAILURE:
		case SIGN_OUT_FAILURE:
		case SIGN_UP_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}
export default AuthReducer;
