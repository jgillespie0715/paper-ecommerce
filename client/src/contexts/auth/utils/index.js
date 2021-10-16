export default function buildQuery(httpClient) {
	return async function (queryObj) {
		try {
			let response = await httpClient(queryObj);
			console.log('response: ', response);
			return response;
		} catch (error) {
			return error;
		}
	};
}
