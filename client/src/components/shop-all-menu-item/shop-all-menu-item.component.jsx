import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './shop-all-menu-item.styles.scss';

function ShopAllMenuItem({
	title,
	imageUrl,
	size,
	action,
	linkUrl,
	id,
	match,
	history,
}) {
	return (
		<div className={`${size} shop-all-menu-item`}>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='content'>
				<Link
					onClick={() => history.push(`${match.url}`)}
					to={`/shop/${title}`}
					replace
				>
					<h1 className='title'>{title.toUpperCase()}</h1>
					<span className='subtitle'>{action}</span>
				</Link>
			</div>
		</div>
	);
}

export default withRouter(ShopAllMenuItem);
