import React from 'react';

import { Link } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';

function BlogForm({ onBlogSubmit, blogFields, setBlogFields }) {
	const { title, content } = blogFields;

	const handleChange = async (e) => {
		const { name, value } = e.target;
		setBlogFields({ ...blogFields, [name]: value });
	};

	return (
		<div className='blog-new'>
			<h2 className='title'>Blog Form</h2>
			<form className='blog-new-form' onSubmit={onBlogSubmit}>
				<FormInput
					type='text'
					name='title'
					value={title}
					onChange={handleChange}
					label='Blog Title'
					required
				></FormInput>
				<FormInput
					type='text'
					name='content'
					value={content}
					onChange={handleChange}
					label='Content'
					required
				></FormInput>
				<Link to='/blogs' className='red btn-flat white-text'>
					Cancel
				</Link>
				<button type='submit' className='teal btn-flat right white-text'>
					Next
					<i className='material-icons right'>done</i>
				</button>
			</form>
		</div>
	);
}

export default BlogForm;
