import { BASE_API_URL } from '../Constants';

const makeCall = (type, url, data) => {
  return fetch(BASE_API_URL + url, {
    method: type,
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const postCall = (url, data) => {
  return makeCall('POST', url, data);
};

export const getCall = (url, data = null) => {
  return makeCall('GET', url, data);
};
