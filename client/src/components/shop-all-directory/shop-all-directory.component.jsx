import React, { useContext } from 'react';

import ShopAllMenuItem from '../shop-all-menu-item/shop-all-menu-item.component';

import ShopAllDirectoryContext from '../../contexts/shop-all-directory/shop-all-directory.context';

import './shop-all-directory.styles.scss';

function ShopAllDirectory() {
	const sections = useContext(ShopAllDirectoryContext);
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherSectionProps }) => (
				<ShopAllMenuItem key={id} id={id} {...otherSectionProps} />
			))}
		</div>
	);
}

export default ShopAllDirectory;
