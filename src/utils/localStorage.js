const localStoragePrefix = 'sabores-';

const checkIfHasLoginData = () => {
  const token = localStorage.getItem(localStoragePrefix + 'token');
  const email = localStorage.getItem(localStoragePrefix + 'email');
  const password = localStorage.getItem(localStoragePrefix + 'password');

  if ([token, email, password].every((x) => x?.length)) {
    console.log('tem login no localStorage');
    return true;
  }

  return false;
};

const getLoginData = (key) => {
  const dataSearched = localStorage.getItem(localStoragePrefix + key);
  return dataSearched?.length ? dataSearched : '';
};

const setLoginData = (key, value) => {
  localStorage.setItem(localStoragePrefix + key, value);
};

export { checkIfHasLoginData, getLoginData, setLoginData };
