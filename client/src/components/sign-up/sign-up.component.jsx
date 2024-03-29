import React, { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth/context';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

function SignUp() {
	const authContext = useContext(AuthContext);
	const { signUp } = authContext;
	const [userCredentials, setUserCredentials] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { username, email, password, confirmPassword } = userCredentials;
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords dont match');
			return;
		}
		signUp({ username, email, password, confirmPassword });
	};

	const handleChange = async (e) => {
		const { name, value } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='username'
					value={username}
					onChange={handleChange}
					label='username'
					required
				></FormInput>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={handleChange}
					label='Email'
					required
				></FormInput>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={handleChange}
					label='Password'
					required
				></FormInput>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					label='Confirm Password'
					required
				></FormInput>
				<CustomButton type='submit'> SIGN UP </CustomButton>
			</form>
		</div>
	);
}

export default SignUp;
