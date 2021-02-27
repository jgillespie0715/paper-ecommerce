import React, { useReducer } from 'react';
import axios from 'axios';
import BlogContext from './blog.context';
import BlogReducer from './blog.reducer';
import { FETCH_BLOGS, FETCH_BLOG, SHOW_FORM_REVIEW } from '../types';

function BlogState(props) {
	const initialState = {
		showFormReview: false,
		blogs: [],
	};

	const [state, dispatch] = useReducer(BlogReducer, initialState);

	async function submitBlog(values, history) {
		// const res = await axios.post('/api/blogs', values);
		const res = {
			data: { title: 'test title 2', content: 'content test', _user: 22 },
		};
		// after submit goes to dashboard
		history.push('/blogs');
		dispatch({ type: FETCH_BLOG, payload: res.data });
	}

	async function fetchBlogs() {
		// const res = await axios.get('/api/blogs');

		const res = {
			data: {
				blogs: [
					{ user: 'testuser', _id: 1, title: 'test title', msg: 'test msg' },
				],
			},
		};

		dispatch({ type: FETCH_BLOGS, payload: res.data });
	}

	async function fetchBlog(id) {
		// const res = await axios.get(`/api/blogs/${id}`);
		const res = {
			data: { user: 'testuser', _id: 1, title: 'test title', msg: 'test msg' },
		};
		dispatch({ type: FETCH_BLOG, payload: res.data });
	}

	function setShowFormReview() {
		dispatch({ type: SHOW_FORM_REVIEW });
	}

	return (
		<BlogContext.Provider
			value={{
				showFormReview: state.showFormReview,
				blogs: state.blogs,
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
