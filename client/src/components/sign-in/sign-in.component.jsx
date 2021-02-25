import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

function SignIn() {
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
					<CustomButton type='button'>Sign In With Google</CustomButton>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
