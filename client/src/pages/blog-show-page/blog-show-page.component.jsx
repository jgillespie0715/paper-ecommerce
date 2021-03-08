import React, { useEffect, useContext, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import BlogContext from '../../contexts/blog/blog.context';

// TODO: how is id getting to params
function BlogShow({ match }) {
	const blogId = match.params._id;
	const blogContext = useContext(BlogContext);
	const { fetchBlog, fetchedBlog } = blogContext;
	useEffect(() => {
		fetchBlog(blogId);
		// fetchBlog();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!fetchedBlog) {
		// return '';
		return <div>you have no blogs</div>;
	}
	const { title, content } = fetchedBlog;

	function renderFields() {
		return (
			<Fragment>
				<div key='blog-title'>
					<label>Blog Title</label>
					<h3>{title}</h3>
				</div>
				<div key='content'>
					<label>Content</label>
					<p>{content}</p>
				</div>
			</Fragment>
		);
	}

	return <div>{renderFields()}</div>;
}

export default withRouter(BlogShow);
