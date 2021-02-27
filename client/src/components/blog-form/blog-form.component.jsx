import React, { Fragment } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import formFields from '../blog-form-fields/blog-form-fields.component';
import BlogField from '../blog-field/blog-field.component';
// TODO: add react-final-form
function BlogForm({ onBlogSubmit }) {
	function Field({ label, name }) {
		return (
			<Fragment>
				key={name}
				component={BlogField}
				type="text" label={label}
				name={name}
			</Fragment>
		);
	}
	function renderFields() {
		return _.map(formFields, Field);
	}

	return (
		<div>
			<form onSubmit={onBlogSubmit}>
				{renderFields()}
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
