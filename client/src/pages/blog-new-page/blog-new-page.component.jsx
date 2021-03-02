import React, { useContext } from 'react';
import BlogForm from '../../components/blog-form/blog-form.component';
import BlogFormReview from '../../components/blog-form-review/blog-form-review.component';
import BlogContext from '../../contexts/blog/blog.context';

function BlogNew({ setShowFormReview }) {
	const blogContext = useContext(BlogContext);
	const { showFormReview } = blogContext;

	function renderContent() {
		if (showFormReview) {
			return <BlogFormReview onCancel={() => setShowFormReview()} />;
		}

		return <BlogForm onBlogSubmit={() => setShowFormReview()} />;
	}

	return <div>New Blog{renderContent()}</div>;
}
// TODO: react-final-form
export default BlogNew;
