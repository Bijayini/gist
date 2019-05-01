import axios from 'axios';

import history from './history';

const BASE_URL = 'https://api.github.com/';

export const urls = {
  getGist: userName => `${BASE_URL}users/${userName}/gists`,
  getGistDetails: id => `${BASE_URL}gists/${id}/forks`,
};

class ApiError extends Error {
  constructor(response, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    return response;
  }
}

const api = (method, url, data = null) => {
  return axios({
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    data,
  })
    .then(response => {
      if (!(response.status === 200 || response.status === 204)) {
        throw new ApiError(response);
      }
      return response.data;
    })
    .catch(() => {
      history.push('/error');
    });
};

export default api;
