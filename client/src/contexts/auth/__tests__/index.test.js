import queryObjs from '../axios/requests';
import apiQueries from '../axios/index';

const { getCurrentUserReqObj } = queryObjs;
const { getCurrentUser } = apiQueries;

describe('get current user', () => {
	it('request objects have a method and url properties', () => {
		const expected = {
			method: 'GET',
			url: '/auth/current_user',
		};
		expect(getCurrentUserReqObj).toEqual(expected);
	});
	it('request objects to be read only', () => {
		expect(() => (getCurrentUserReqObj.method = 'POST')).toThrow();
	});
	it('response objects to be read only', () => {
		expect(() => (getCurrentUser = { somethingCrazy: 99 })).toThrow();
	});
	// Todo : respond with correct error messages
	// Todo: testing the response from the api should be tested on the server

	// 	xit('handles getting back no results', () => {
	// 		const zeroResults = {
	// 			Response: 'False',
	// 			Error: 'Movie not found!',
	// 		};
	// 		const expected = {
	// 			total: 0,
	// 			movies: [],
	// 		};
	// 		expect(normalizeMovieResults(zeroResults)).toEqual(expected);
	// 	});
	// 	xit('handles API errors', () => {
	// 		const apiError = {
	// 			Response: 'False',
	// 			Error: 'Kablamo!',
	// 		};
	// 		const expected = { error: apiError.Error };

	// 		expect(normalizeMovieResults(apiError)).toEqual(expected);
	// 	});
});
