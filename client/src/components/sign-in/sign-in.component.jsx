import React, { useContext } from 'react';

import AuthContext from '../../contexts/auth/auth.context';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

function SignIn() {
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
					<a href={'/auth/google'}>Login With Google</a>
					<CustomButton type='button' onClick={signInWithGoogle}>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
