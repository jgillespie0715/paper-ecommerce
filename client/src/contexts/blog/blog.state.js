import React, { useReducer } from 'react';
import axios from 'axios';
import BlogContext from './blog.context';
import BlogReducer from './blog.reducer';
import {
	FETCH_BLOGS,
	FETCH_BLOG,
	SHOW_FORM_REVIEW,
	FETCH_BLOGS_FAILURE,
	FETCH_BLOG_FAILURE,
} from './blog.types';

function BlogState(props) {
	const initialState = {
		showFormReview: false,
		blogs: [],
		fetchedBlog: {},
	};

	const [state, dispatch] = useReducer(BlogReducer, initialState);

	async function submitBlog(values, history) {
		try {
			const { data } = await axios.post('/api/blogs', values);
			history.push('/blogs');
			dispatch({ type: FETCH_BLOG, payload: data });
		} catch (error) {
			dispatch({ type: FETCH_BLOG_FAILURE, payload: error });
		}
	}

	async function fetchBlogs() {
		try {
			const { data } = await axios.get('/api/blogs');
			dispatch({ type: FETCH_BLOGS, payload: data });
		} catch (error) {
			dispatch({ type: FETCH_BLOGS_FAILURE, payload: error });
		}
	}

	async function fetchBlog(id, userId) {
		try {
			const { data } = await axios({
				method: 'post',
				baseURL: 'http://localhost:5000',
				url: `api/blogs/${id}`,
				data: {
					id: id,
					userId: userId,
				},
			});
			dispatch({ type: FETCH_BLOG, payload: data });
		} catch (error) {
			dispatch({ type: FETCH_BLOG_FAILURE, payload: error });
		}
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
