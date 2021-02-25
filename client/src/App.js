import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home-page/homepage.component';
import ShopAllPage from './pages/shop-all/shop-all-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop-all' component={ShopAllPage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
