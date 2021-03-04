import { FETCH_USER } from '../types';
import AuthActionTypes from './auth.types';

function AuthReducer(state, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		case AuthActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		case AuthActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null,
			};
		case AuthActionTypes.SIGN_IN_FAILURE:
		case AuthActionTypes.SIGN_OUT_FAILURE:
		case AuthActionTypes.SIGN_UP_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}
export default AuthReducer;
