import axios from 'axios';
import requests from './requests';

import buildQuery from '../utils';

const { getCurrentUserReqObj } = requests;

const responses = Object.freeze({
	getCurrentUser: Object.freeze(buildQuery(axios)(getCurrentUserReqObj)),
});

export default responses;
