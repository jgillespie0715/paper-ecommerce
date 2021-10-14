import React, { useEffect, useContext, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import BlogContext from '../../contexts/blog/blog.context';

function BlogShow({ match, location }) {
	const {
		state: { userid },
	} = location;
	const blogId = match.params._id;
	const blogContext = useContext(BlogContext);
	const { fetchBlog, fetchedBlog } = blogContext;
	useEffect(() => {
		fetchBlog(blogId, userid);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (!Object.keys(fetchedBlog).length > 0) {
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
