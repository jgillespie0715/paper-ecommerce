import { FETCH_BLOGS, FETCH_BLOG, SHOW_FORM_REVIEW } from '../types';

function BlogReducer(state, action) {
	switch (action.type) {
		case FETCH_BLOG:
			console.log('fetch blog hit, payload:', action.payload);
			//const blog = action.payload;
			return { ...state, fetchedBlog: action.payload };
		case FETCH_BLOGS:
			console.log('fetch blogs hit');
			console.log('action.payloadin fetchBlogs: ', action.payload);

			return { ...state, blogs: action.payload };
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
