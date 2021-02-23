import React, { useContext } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import BlogDirectoryContext from '../../contexts/blog-directory/blog-directory.context';

import './blog-directory.styles.scss';

function BlogDirectory() {
	const sections = useContext(BlogDirectoryContext);

	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
}

export default BlogDirectory;
