const requests = Object.freeze({
	getCurrentUserReqObj: Object.freeze({
		method: 'GET',
		url: '/auth/current_user',
	}),
	getGoogleUserReqObj: Object.freeze({
		method: 'GET',
		url: '/auth/google',
	}),
});

export default requests;
