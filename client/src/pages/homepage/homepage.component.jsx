import React from 'react';
import BlogDirectory from '../../components/blogDirectory/blog-directory.component';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

function HomePage() {
	return (
		<div className='homepage'>
			<BlogDirectory />
			<Directory />
		</div>
	);
}

export default HomePage;
