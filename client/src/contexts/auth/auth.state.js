import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';
import {
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
} from './auth.types.js';

function AuthState(props) {
	const INITIAL_STATE = {
		currentUser: null,
		error: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	async function isUserAuthenticated() {
		try {
			const { data } = await axios.get('/auth/current_user');
			console.log('success in isUserAuthenticated in authState:', data);
			dispatch({ type: SIGN_IN_SUCCESS, payload: data });
		} catch (error) {
			console.log('error in isUserAuthenticated in authState:', error);
			dispatch({ type: SIGN_IN_FAILURE, payload: error });
		}
	}

	async function signInWithGoogle() {
		try {
			// TODO: double check backend route that it is responding with user
			const { user } = await axios.get('/auth/google');
			console.log('success in signInfWithGoogle in authState:', user);
			dispatch({ type: SIGN_IN_SUCCESS, payload: user });
		} catch (error) {
			console.log('error in signInfWithGoogle in authState:', error);
			dispatch({ type: SIGN_IN_FAILURE, payload: error });
		}
	}

	async function signInWithEmail(values) {
		try {
			const { data } = await axios.post('/auth/login', values);
			console.log('signUP success in authState:', data);
			dispatch({ type: SIGN_IN_SUCCESS, payload: data });
		} catch (error) {
			console.log('error in signUP in authState', error);
			dispatch({ type: SIGN_IN_FAILURE, payload: error });
		}
	}

	async function signOut() {
		try {
			const { user } = await axios.get('/auth/logout');
			console.log('signOut success in authState:', user);
			dispatch({ type: SIGN_OUT_SUCCESS, payload: user });
		} catch (error) {
			console.log('error in signOut in authState', error);
			dispatch({ type: SIGN_OUT_FAILURE, payload: error });
		}
	}

	async function signUp(values) {
		try {
			const { data } = await axios.post('/auth/signup', values);
			console.log('signUP success in authState:', data);
			dispatch({ type: SIGN_UP_SUCCESS, payload: data });
		} catch (error) {
			console.log('error in signUP in authState', error);
			dispatch({ type: SIGN_UP_FAILURE, payload: error });
		}
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser: state.currentUser,
				error: state.error,
				isUserAuthenticated,
				signInWithGoogle,
				signInWithEmail,
				signOut,
				signUp,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthState;
