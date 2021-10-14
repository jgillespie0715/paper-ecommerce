import {
	FETCH_BLOGS,
	FETCH_BLOG,
	SHOW_FORM_REVIEW,
	FETCH_BLOGS_FAILURE,
	FETCH_BLOG_FAILURE,
} from './blog.types.js';

function BlogReducer(state, action) {
	switch (action.type) {
		case FETCH_BLOG:
			return { ...state, fetchedBlog: action.payload };
		case FETCH_BLOGS:
			return { ...state, blogs: action.payload };
		case SHOW_FORM_REVIEW:
			return {
				...state,
				showFormReview: true,
			};
		case FETCH_BLOG_FAILURE:
		case FETCH_BLOGS_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}
export default BlogReducer;
