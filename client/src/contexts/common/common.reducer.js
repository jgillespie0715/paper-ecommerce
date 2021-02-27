import { SET_LOADING, CLEAR_USERS, SET_ALERT, REMOVE_ALERT } from '../types';

function CommonReducer(state, action) {
	switch (action.type) {
		// TODO: CLEAR BLOGS
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		// TODO: alerts should be an array otherwise it will wipe blogs and loading state in CommonState
		case SET_ALERT:
			return action.payload;
		case REMOVE_ALERT:
			return null;
		default:
			return state;
	}
}
export default CommonReducer;
