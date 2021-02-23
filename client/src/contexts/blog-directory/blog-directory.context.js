import { createContext } from 'react';

import BLOG_DIRECTORY_DATA from './blog-directory.data';

const BlogDirectoryContext = createContext(BLOG_DIRECTORY_DATA);

export default BlogDirectoryContext;
