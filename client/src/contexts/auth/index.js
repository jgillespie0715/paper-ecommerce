import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './context';
import AuthReducer from './reducers';
import {
	GET_CURRENT_USER,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILURE,
	SIGN_UP_SUCCESS,
	SIGN_UP_FAILURE,
} from './types/index.js';
import { getCurrentUserRes, getGoogleUserRes } from './axios';

function AuthState(props) {
	const INITIAL_STATE = {
		currentUser: null,
		error: null,
	};

	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	async function isUserAuthenticated() {
		try {
			const { data } = await getCurrentUserRes;
			dispatch({ type: GET_CURRENT_USER, payload: data });
		} catch (error) {
			console.log('error in isUserAuthenticated: ', error);
			dispatch({ type: SIGN_IN_FAILURE, payload: error });
		}
	}

	async function signInWithGoogle() {
		try {
			const { user } = await getGoogleUserRes;
			dispatch({ type: SIGN_IN_SUCCESS, payload: user });
		} catch (error) {
			console.log('error in signInWithGoogle');
			dispatch({ type: SIGN_IN_FAILURE, payload: error });
		}
	}

	async function signInWithEmail(values) {
		try {
			const { data } = await axios.post('/auth/login', values);
			dispatch({ type: SIGN_IN_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: SIGN_IN_FAILURE, payload: error });
		}
	}

	async function signOut() {
		try {
			const { user } = await axios.get('/auth/logout');
			dispatch({ type: SIGN_OUT_SUCCESS, payload: user });
		} catch (error) {
			dispatch({ type: SIGN_OUT_FAILURE, payload: error });
		}
	}

	async function signUp(values) {
		try {
			const { data } = await axios.post('/auth/signup', values);
			dispatch({ type: SIGN_UP_SUCCESS, payload: data });
		} catch (error) {
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
