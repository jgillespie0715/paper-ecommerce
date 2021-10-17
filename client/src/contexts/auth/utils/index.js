// needs to be async here as well as in /auth/index.js to
// catch errors
async function apiCall(httpClient, queryObj) {
	try {
		var response = await httpClient(queryObj);
	} catch (error) {
		return error;
	}
	return response;
}
export default function buildQuery(httpClient) {
	return function (queryObj) {
		return apiCall(httpClient, queryObj);
	};
}
