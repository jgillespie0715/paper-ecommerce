import React, { Component } from 'react';

class BlogShow extends Component {
	componentDidMount() {
		this.props.fetchBlog(this.props.match.params._id);
	}

	render() {
		if (!this.props.blog) {
			return '';
		}

		const { title, content } = this.props.blog;

		return (
			<div>
				<h3>{title}</h3>
				<p>{content}</p>
			</div>
		);
	}
}

export default BlogShow;
