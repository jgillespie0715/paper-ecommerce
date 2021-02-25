import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import CollectionContext from '../../contexts/collection/collection.context';

import './collection-overview.styles.scss';

function CollectionOverview() {
	const collectionsMap = useContext(CollectionContext);
	const collections = Object.keys(collectionsMap).map(
		(key) => collectionsMap[key]
	);

	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
}

export default CollectionOverview;
