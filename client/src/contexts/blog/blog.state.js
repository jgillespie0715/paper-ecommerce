import React, { useReducer } from 'react';
import axios from 'axios';
import BlogContext from './blog.context';
import BlogReducer from './blog.reducer';
import { FETCH_BLOGS, FETCH_BLOG, SHOW_FORM_REVIEW } from '../types';

function BlogState(props) {
	const initialState = {
		showFormReview: false,
		blogs: [],
		fetchedBlog: {},
	};

	const [state, dispatch] = useReducer(BlogReducer, initialState);

	async function submitBlog(values, history) {
		// const res = await axios.post('/api/blogs', values);
		const res = { data: { values, _id: 123 } };
		// after submit goes to dashboard
		history.push('/blogs');
		dispatch({ type: FETCH_BLOG, payload: res.data });
	}

	async function fetchBlogs() {
		// const res = await axios.get('/api/blogs');

		const res = {
			data: [
				{
					_id: 1,
					title: 'first blog',
					content: 'my first blog',
				},
				{
					_id: 2,
					title: 'second blog',
					content: 'my second blog',
				},
				{
					_id: 3,
					title: 'third blog',
					content: 'my third blog',
				},
				{
					_id: 4,
					title: 'fourth blog',
					content: 'my fourth blog',
				},
				{
					_id: 5,
					title: 'fifth blog',
					content: 'my fifth blog',
				},
				{
					_id: 6,
					title: 'sixth blog',
					content: 'my sixth blog',
				},
			],
		};

		dispatch({ type: FETCH_BLOGS, payload: res.data });
	}

	async function fetchBlog(id) {
		// const res = await axios.get(`/api/blogs/${id}`);
		// const res = {
		// 	data: {
		// 		user: 'testuser',
		// 		_id: 1,
		// 		title: 'test title',
		// 		msg: 'test msg',
		// 	},
		// };
		// dispatch({ type: FETCH_BLOG, payload: res.data });
		dispatch({
			type: FETCH_BLOG,
			payload: {
				user: 'testuser',
				_id: id,
				title: 'test title',
				content: 'test msg',
			},
		});
	}

	function setShowFormReview() {
		dispatch({ type: SHOW_FORM_REVIEW });
	}

	return (
		<BlogContext.Provider
			value={{
				showFormReview: state.showFormReview,
				blogs: state.blogs,
				fetchedBlog: state.fetchedBlog,
				submitBlog,
				fetchBlogs,
				fetchBlog,
				setShowFormReview,
			}}
		>
			{props.children}
		</BlogContext.Provider>
	);
}

export default BlogState;
