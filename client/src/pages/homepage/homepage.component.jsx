import React from 'react';
import Directory from '../../components/directory/directory.component';
import ShopAllDirectory from '../../components/shop-all-directory/shop-all-directory.component';

import './homepage.styles.scss';

function HomePage() {
	return (
		<div className='homepage'>
			<Directory />
		</div>
	);
}

export default HomePage;
