import mapKeys from 'lodash/mapKeys';
import { FETCH_BLOGS, FETCH_BLOG, SHOW_FORM_REVIEW } from '../types';

function BlogReducer(state, action) {
	switch (action.type) {
		case FETCH_BLOG:
			console.log('action.payload: ', action.payload);
			const blog = action.payload;
			return { ...state, [blog._id]: action.payload };
		case FETCH_BLOGS:
			return { ...state, ...mapKeys(action.payload, '_id') };
		case SHOW_FORM_REVIEW:
			return {
				...state,
				showFormReview: true,
			};
		default:
			return state;
	}
}
export default BlogReducer;
