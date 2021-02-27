import { FETCH_USER } from '../types';

function AuthReducer(state, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}
export default AuthReducer;
