import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth/auth.context';
import Dashboard from '../blog-dashboard-page/blog-dashboard-page.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import 'materialize-css/dist/css/materialize.min.css';

function BlogPage() {
	const authContext = useContext(AuthContext);
	const { currentUser } = authContext;
	return (
		<div className='blog-page' style={{ textAlign: 'center' }}>
			<h1>Share Journal Creations</h1>
			Blog here...
			<div className='options'>
				{currentUser ? (
					<div>
						<Dashboard />
					</div>
				) : (
					<Link to='/signin' replace>
						<CustomButton children='SIGN IN' />
					</Link>
				)}
			</div>
		</div>
	);
}

export default BlogPage;
