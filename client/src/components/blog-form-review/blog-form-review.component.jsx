import React, { Fragment, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import BlogContext from '../../contexts/blog/blog.context';

function BlogFormReview({ history, onCancel, blogFields }) {
	const blogContext = useContext(BlogContext);
	const { submitBlog } = blogContext;
	const { title, content } = blogFields;
	const handleSubmit = async (e) => {
		e.preventDefault();
		submitBlog({ title, content }, history);
	};

	function renderFields() {
		return (
			<Fragment>
				<div key='blog-title'>
					<label>Blog Title</label>
					<div>{title}</div>
				</div>
				<div key='content'>
					<label>Content</label>
					<div>{content}</div>
				</div>
			</Fragment>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h5>Please confirm your entries</h5>
			<div className='confirm'>{renderFields()}</div>
			<div>
				<button
					className='yellow darken-3 white-text btn-flat'
					onClick={onCancel}
				>
					Back
				</button>
				<button className='green btn-flat right white-text'>
					Save Blog
					<i className='material-icons right'>email</i>
				</button>
			</div>
		</form>
	);
}

export default withRouter(BlogFormReview);
