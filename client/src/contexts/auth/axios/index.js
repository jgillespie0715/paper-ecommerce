import axios from 'axios';
import requests from './requests';

import buildQuery from '../utils';

const { getCurrentUserReqObj } = requests;

export const getCurrentUserRes = buildQuery(axios)(getCurrentUserReqObj);
