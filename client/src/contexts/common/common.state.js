import React, { useReducer } from 'react';
import axios from 'axios';
import CommonContext from './common.context';
import CommonReducer from './common.reducer';
import { CLEAR_USERS, SET_LOADING, SET_ALERT, REMOVE_ALERT } from '../types';

function CommonState(props) {
	const initialState = {
		loading: false,
		alerts: null,
	};

	const [state, dispatch] = useReducer(CommonReducer, initialState);

	function clearUsers() {
		// do stuff
	}
	function setLoading() {
		// do stuff
	}
	function setAlert(msg, type) {
		dispatch({
			type: SET_ALERT,
			payload: { msg, type },
		});
		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
	}
	function removeAlert() {
		dispatch({ type: REMOVE_ALERT });
	}

	return (
		<CommonContext.Provider
			value={{
				clearUsers,
				setLoading,
				setAlert,
				removeAlert,
			}}
		>
			{props.children}
		</CommonContext.Provider>
	);
}

export default CommonState;
