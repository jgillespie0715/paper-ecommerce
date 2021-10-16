import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/logo.svg';

import AuthContext from '../../contexts/auth/context';

import './header.styles.scss';

//TODO add google avatar
// TODO redirect to homepage on signout
function Header() {
	const authContext = useContext(AuthContext);
	const { currentUser, signOut } = authContext;
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				{currentUser ? (
					<Link className='option' to='/blogs'>
						MY BLOGS
					</Link>
				) : (
					<Link className='option' to='/blog'>
						BLOG
					</Link>
				)}

				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
				<Link className='option' to='/about'>
					ABOUT
				</Link>

				{currentUser ? (
					<div className='option' onClick={signOut}>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
}

export default Header;
