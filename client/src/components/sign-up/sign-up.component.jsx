import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

function SignUp() {
	const handleSubmit = async (e) => {
		e.preventDefault();

		//  do stuff
	};

	const handleChange = async (e) => {
		//  do stuff
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have an account</h2>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value=''
					onChange={handleChange}
					label='Display Name'
					required
				></FormInput>
				<FormInput
					type='email'
					name='email'
					value=''
					onChange={handleChange}
					label='Email'
					required
				></FormInput>
				<FormInput
					type='password'
					name='password'
					value=''
					onChange={handleChange}
					label='Password'
					required
				></FormInput>
				<FormInput
					type='password'
					name='confirmPassword'
					value=''
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
