import React, { useContext } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import ShopAllDirectoryContext from '../../contexts/shop-all-directory/shop-all-directory.context';

import './shop-all-directory.styles.scss';

function ShopAllDirectory() {
	const sections = useContext(ShopAllDirectoryContext);

	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
}

export default ShopAllDirectory;
