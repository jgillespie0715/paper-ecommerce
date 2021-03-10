import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../../components/blog-list/blog-list.component';

function Dashboard() {
	return (
		<div>
			DASHBOARD
			<BlogList />
			<div className='fixed-action-btn'>
				<Link to='/blogs/new' className='btn-floating btn-large red'>
					<i className='material-icons'>add</i>
				</Link>
			</div>
		</div>
	);
}

export default Dashboard;
