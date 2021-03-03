import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import formFields from '../blog-form-fields/blog-form-fields.component';

function BlogForm() {
	function renderFields() {
		return _.map(formFields, () => {
			return <div className='field'>Field</div>;
		});
	}

	return (
		<div>
			<form>
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
