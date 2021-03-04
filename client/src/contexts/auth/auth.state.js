import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';
// TODO: decide isUserAuthenticated or fetch_user and delete appropriate import
import { FETCH_USER } from '../types';
import {
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
} from './auth.types';

function AuthState(props) {
	const INITIAL_STATE = {
		currentUser: null,
		error: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
	
	// TODO: decide which name to use fetchUser or isUserAuthenticated
	async function fetchUser() {
		// const res = await axios.get('/api/current_user');
		const res = { user: 'testUser' };

		dispatch({ type: FETCH_USER, payload: res.data });
	}

// TODO: decide which name to use fetchUser or isUserAuthenticated
	async function isUserAuthenticated() {
		try {
			const { currentUser } = await axios.get('/auth/current_user')
		} catch (error) {
			console.log('error in isUserAuthenticated in authState:', error);
			dispatch({ type: SIGN_IN_FAILURE, payload: error });
		}
		console.log('success in isUserAuthenticated in authState:', user)
		dispatch({ type: SIGN_IN_SUCCESS, payload: user });
	};
		
	async function signInWithGoogle() {
		try {
			// TODO: double check backend route that it is responding with user
			const { user } = await axios.get('/auth/google');
		} catch (error) {
			console.log('error in signInfWithGoogle in authState:', error);
			dispatch({ type: SIGN_IN_FAILURE, payload: error });
		}
		console.log('success in signInfWithGoogle in authState:', user)
		dispatch({ type: SIGN_IN_SUCCESS, payload: user });
	};

	async function signInWithEmail() {
		//  TODO: build out backend route and what response is being expected
		try {
			const { user } = await axios.get('/auth/signin');
		} catch (error) {
			console.log('error in signInWith Email in authState', error);
			dispatch({ type: SIGN_IN_FAILURE, payload: error})
		}
		console.log('email signIn success in signInfWithEmail in authState:', user)
		dispatch({ type: SIGN_IN_SUCCESS, payload: user})
	}

	async function signOut() {
		try {
			// TODO: build out backend route and what response is being sent
			// should there be a response 
			const { user } = await axios.get('/auth/logout')
			
		} catch (error) {
			console.log('error in signOut in authState', error);
			dispatch({ type: SIGN_OUT_FAILURE, payload: error})
		}
		console.log('signOut success in authState:', user)
		dispatch({ type: SIGN_OUT_SUCCESS, payload: user})
		}

	}

	async function signUp() {
		try {
		// TODO: build out backend route and what response is being sent
		// Will this sign in user as well after signup ?
			const { user } = await axios.get('/auth/signup')
		
		} catch (error) {
			console.log('error in signUP in authState', error);
			dispatch({ type: SIGN_UP_FAILURE, payload: error})
		}
		console.log('signUP success in authState:', user)
		dispatch({ type: SIGN_UP_SUCCESS, payload: user})
		}
	
	return (
		<AuthContext.Provider
			value={{
				currentUser: state.currentUser,
				error: state.error,
				fetchUser,
				isUserAuthenticated,
				signInWithGoogle,
				signInWithEmail,
				signOut,
				signUp
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthState;
