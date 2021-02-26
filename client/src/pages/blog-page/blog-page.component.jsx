import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../blog-landing-page/blog-landing-page.component';
import BlogNew from '../blog-new-page/blog-new-page.component';
import BlogShow from '../blog-show-page/blog-show-page.component';
import Dashboard from '../blog-dashboard-page/blog-dashboard-page.component';

import 'materialize-css/dist/css/materialize.min.css';

function BlogPage() {
	return (
		<div className='blog-page'>
			<Landing />
			<Dashboard />

			<Switch>
				<Route path='/blogs/new' component={BlogNew} />
				<Route exact path='/blogs/:_id' component={BlogShow} />
			</Switch>
		</div>
	);
}

export default BlogPage;
