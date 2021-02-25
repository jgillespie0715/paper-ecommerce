import { createContext } from 'react';

import COLLECTION_DATA from './collection.data';

const CollectionContext = createContext(COLLECTION_DATA);

export default CollectionContext;
