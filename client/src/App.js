import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/homepage.component';
import ShopAllPage from './pages/shop-all-page/shop-all-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUp from './pages/signin-signup-page/signin-signup.component';
import Header from './components/header/header.component';
import BlogPage from './pages/blog-page/blog-page.component';
import AuthContext from './contexts/auth/auth.context';
import BlogNew from './pages/blog-new-page/blog-new-page.component';
import BlogShow from './pages/blog-show-page/blog-show-page.component';
import Dashboard from './pages/blog-dashboard-page/blog-dashboard-page.component';

import './App.css';

function App({ match }) {
	const authContext = useContext(AuthContext);
	const { fetchUser } = authContext;
	//  TODO: no /:login in routes, figure out how to do this
	useEffect(() => {
		fetchUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/shop-all' component={ShopAllPage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/signin' component={SignInAndSignUp} />
				<Route path='/blogs/new' component={BlogNew} />
				<Route exact path='/blogs/:_id' component={BlogShow} />
				<Route path='/blogs' component={Dashboard} />
				<Route exact path='/blog' component={BlogPage} />
				<Route exact path='/' component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
