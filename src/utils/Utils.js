export const getUserInformation = () => {
  const ss = window.localStorage;
  const item = ss.getItem('clone-ins');
  return item ? JSON.parse(item) : null;
};

export const setUserInformation = (user) => {
  const ss = window.localStorage;
  return ss.setItem('clone-ins', user);
};

export const isValid = (value) => {
  return typeof value === 'string' && value.trim() !== '';
};
