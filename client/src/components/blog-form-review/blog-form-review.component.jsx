import React, { useContext } from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import formFields from '../blog-form-fields/blog-form-fields.component';
import BlogContext from '../../contexts/blog/blog.context';

// TODO: onCancel, alerts, loading in common context
function BlogFormReview({ formValues, history, onCancel }) {
	const blogContext = useContext(BlogContext);
	const { submitBlog } = blogContext;
	function renderFields() {
		return _.map(formFields, ({ name, label }) => {
			return (
				<div key={name}>
					<label>{label}</label>
					<div>{formValues[name]}</div>
				</div>
			);
		});
	}

	function renderButtons() {
		return (
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
		);
	}

	function onSubmit(event) {
		event.preventDefault();
		submitBlog(formValues, history);
	}

	return (
		<form onSubmit={onSubmit}>
			<h5>Please confirm your entries</h5>
			{renderFields}

			{renderButtons}
		</form>
	);
}

export default withRouter(BlogFormReview);
