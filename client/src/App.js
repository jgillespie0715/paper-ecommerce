import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/homepage.component';
import ShopAllPage from './pages/shop-all-page/shop-all-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUp from './pages/signin-signup-page/signin-signup.component';
import Header from './components/header/header.component';

import './App.css';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop-all' component={ShopAllPage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/signin' component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;
