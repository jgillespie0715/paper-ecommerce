import React, { useEffect, useContext } from 'react';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
import BlogContext from '../../contexts/blog/blog.context';

function BlogList() {
	const blogContext = useContext(BlogContext);
	const { fetchBlogs, blogs } = blogContext;
	useEffect(() => {
		fetchBlogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	function renderBlogs() {
		return map(blogs, (blog) => {
			return (
				<div className='card darken-1 horizontal' key={blog._id}>
					<div className='card-stacked'>
						<div className='card-content'>
							<span className='card-title'>{blog.title}</span>
							<p>{blog.content}</p>
						</div>
						<div className='card-action'>
							<Link to={`/blogs/${blog._id}`}>Read</Link>
						</div>
					</div>
				</div>
			);
		});
	}

	return (
		<div>
			BlogList
			{renderBlogs()}
		</div>
	);
}

export default BlogList;
