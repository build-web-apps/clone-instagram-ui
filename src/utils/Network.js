const makeCall = (type, url, data) => {
  return fetch(url, {
    method: type,
    body: data,
  });
};

export const postCall = (url, data) => {
  return makeCall('POST', url, data);
};

export const getCall = (url, data = null) => {
  return makeCall('GET', url, data);
};
