import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import BlogState from './contexts/blog/blog.state.js';
import AuthState from './contexts/auth';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<AuthState>
			<BlogState>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</BlogState>
		</AuthState>
	</React.StrictMode>,
	document.getElementById('root')
);
