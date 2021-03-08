import React, { useState } from 'react';
import BlogForm from '../../components/blog-form/blog-form.component';
import BlogFormReview from '../../components/blog-form-review/blog-form-review.component';

function BlogNew() {
	const [formState, setFormState] = useState({
		showFormReview: false,
	});
	const [blogFields, setBlogFields] = useState({
		title: '',
		content: '',
	});
	const { showFormReview } = formState;

	function renderContent() {
		if (showFormReview) {
			return (
				<BlogFormReview
					onCancel={() => setFormState({ showFormReview: false })}
					blogFields={blogFields}
				/>
			);
		}

		return (
			<BlogForm
				onBlogSubmit={() => setFormState({ showFormReview: true })}
				blogFields={blogFields}
				setBlogFields={setBlogFields}
			/>
		);
	}

	return <div>New Blog{renderContent()}</div>;
}

export default BlogNew;
