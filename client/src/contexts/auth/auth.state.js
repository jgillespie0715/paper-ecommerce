import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';
import { FETCH_USER } from '../types';

function AuthState(props) {
	const initialState = null;

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	async function fetchUser() {
		// const res = await axios.get('/api/current_user');
		const res = { user: 'testUser' };

		dispatch({ type: FETCH_USER, payload: res.data });
	}

	return (
		<AuthContext.Provider
			value={{
				fetchUser,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthState;
