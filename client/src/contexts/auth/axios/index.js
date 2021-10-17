import axios from 'axios';
import requests from './requests';

import buildQuery from '../utils';

const { getCurrentUserReqObj, getGoogleUserReqObj } = requests;

export const getCurrentUserRes = buildQuery(axios)(getCurrentUserReqObj);

export const getGoogleUserRes = buildQuery(axios)(getGoogleUserReqObj);
