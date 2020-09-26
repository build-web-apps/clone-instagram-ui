export const getUserInformation = () => {
  const ss = window.sessionStorage;
  const item = ss.getItem('clone-ins');
  return item ? JSON.parse(item) : null;
};

export const setUserInformation = (user) => {
  const ss = window.sessionStorage;
  return ss.setItem('clone-ins', user);
};

export const isValid = (value) => {
  return typeof value === 'string' && value.trim() !== '';
};
