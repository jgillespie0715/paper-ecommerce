import React, { useEffect, useContext, Fragment } from 'react';
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
		return blogs.map(({ _id, title, content }) => {
			return (
				<Fragment key={_id}>
					<div className='card darken-1 horizontal'>
						<div className='card-stacked'>
							<div className='card-content'>
								<span className='card-title'>{title}</span>
								<p>{content}</p>
							</div>
							<div className='card-action'>
								<Link to={`/blogs/${_id}`}>Read</Link>
							</div>
						</div>
					</div>
				</Fragment>
			);
		});
	}

	return <div>{renderBlogs()}</div>;
}

export default BlogList;
