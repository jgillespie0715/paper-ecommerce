import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth/auth.context';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

function SignIn() {
	// https://i.ibb.co/mrnJ6r6/btn-google-signin-dark-disabled-web-2x.png
	// https://i.ibb.co/HXxVL9R/btn-google-signin-dark-focus-web-2x.png
	// https://i.ibb.co/K66dS53/btn-google-signin-dark-normal-web-2x.png
	// https://i.ibb.co/yNBzVbQ/btn-google-signin-dark-pressed-web-2x.png
	const authContext = useContext(AuthContext);
	const { signInWithGoogle } = authContext;
	const handleSubmit = async (e) => {
		e.preventDefault();

		//do stuff
	};

	const handleChange = (e) => {
		// do stuff
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value=''
					handleChange={handleChange}
					label='email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value=''
					handleChange={handleChange}
					label='password'
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'> Sign In </CustomButton>
					<div class='google-btn'>
						<a href='/auth/google'>
							<img
								className='google-btn'
								alt='sign-in with Google'
								src='https://i.ibb.co/K66dS53/btn-google-signin-dark-normal-web-2x.png'
							/>
						</a>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
