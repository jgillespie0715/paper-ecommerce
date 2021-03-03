import React from 'react';
import map from 'lodash/map';
import { Link } from 'react-router-dom';

function BlogList() {
	function renderBlogs() {
		return map(this.props.blogs, (blog) => {
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

	return <div>{renderBlogs()}</div>;
}

export default BlogList;
