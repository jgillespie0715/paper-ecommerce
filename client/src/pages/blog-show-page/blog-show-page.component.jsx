import React, { useEffect, useContext } from 'react';
import BlogContext from '../../contexts/blog/blog.context';

// TODO: how is id getting to params
function BlogShow({ match, blog }) {
	const blogContext = useContext(BlogContext);
	const { fetchBlog } = blogContext;
	useEffect(() => {
		fetchBlog();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!blog) {
		return '';
	}

	const { title, content } = blog;
	return (
		<div>
			BLOG SHOW
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
}

export default BlogShow;
