import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth/context';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

function SignIn() {
	const authContext = useContext(AuthContext);
	const { signInWithEmail } = authContext;
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: '',
	});

	const { email, password } = userCredentials;
	const handleSubmit = async (e) => {
		e.preventDefault();

		signInWithEmail({ email, password });
	};

	const handleChange = async (e) => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value={email}
					handleChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='Password'
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'> Sign In </CustomButton>
					<div className='google-btn'>
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
