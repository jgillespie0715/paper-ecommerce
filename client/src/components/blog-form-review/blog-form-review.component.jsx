import React from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import formFields from '../blog-form-fields/blog-form-fields.component';

function BlogFormReview() {
	function renderFields() {
		const { formValues } = this.props;

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
				<button className='yellow darken-3 white-text btn-flat'>Back</button>
				<button className='green btn-flat right white-text'>
					Save Blog
					<i className='material-icons right'>email</i>
				</button>
			</div>
		);
	}

	function onSubmit(event) {
		event.preventDefault();
		// do stuff
	}

	return (
		<form onSubmit={onSubmit()}>
			<h5>Please confirm your entries</h5>
			{renderFields()}

			{renderButtons()}
		</form>
	);
}

export default withRouter(BlogFormReview);
