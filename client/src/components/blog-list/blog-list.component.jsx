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
		return blogs.map(({ _id, title, content, _user }) => {
			return (
				<Fragment key={_id}>
					<div className='card darken-1 horizontal'>
						<div className='card-stacked'>
							<div className='card-content'>
								<span className='card-title'>{title}</span>
								<p>{content}</p>
							</div>
							<div className='card-action'>
								{(location) => ({ ...location, pathname: '/courses' })}
								<Link
									to={(location) => ({
										...location,
										pathname: `/blogs/${_id}`,
										state: { userid: _user },
									})}
								>
									Read
								</Link>
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
