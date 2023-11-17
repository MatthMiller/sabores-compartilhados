import axios from 'axios';
import React from 'react';
import { API_URL } from '../config';
import { getLoginData, setLoginData } from '../utils/localStorage';

export const GlobalContext = React.createContext(null);

const GlobalDataContext = ({ children }) => {
  const [loginGlobalData, setLoginGlobalData] = React.useState({
    email: getLoginData('email'),
    password: getLoginData('password'),
    token: getLoginData('token'),
    isLogged: '',
  });

  React.useEffect(() => {
    console.log('renderizou uma página', loginGlobalData.token);
    if (!getLoginData('token') || !getLoginData('email')) {
      // sem token e sem email no localstorage
      setLoginGlobalData((previousGlobalData) => ({
        ...previousGlobalData,
        isLogged: false,
      }));
      return;
    }

    async function checkTokenValidity() {
      const isValid = await checkIfTokenIsValid(
        loginGlobalData.email,
        loginGlobalData.token
      );

      console.log('ISVALID', isValid);

      if (isValid) {
        console.log('isLogged');
        setLoginGlobalData((previousGlobalData) => ({
          ...previousGlobalData,
          isLogged: true,
        }));
      } else {
        console.log('expired connection');
        setLoginGlobalData((previousGlobalData) => ({
          ...previousGlobalData,
          isLogged: false,
        }));

        setLoginData('email', '');
        setLoginData('token', '');
        setLoginData('password', '');
      }
    }

    checkTokenValidity();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    console.log('isLogged?', loginGlobalData.isLogged);
    console.log(loginGlobalData);
  }, [loginGlobalData]);

  const checkIfTokenIsValid = async (email, token) => {
    const response = await fetch(
      `${API_URL}/users/check-auth?email=${email}&token=${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      // const data = await response.json();
      // console.log(data.message);
      return true;
    } else {
      // const error = await response.json();
      // console.log(error.message);
      return false;
    }
  };

  return (
    <GlobalContext.Provider
      value={{ loginGlobalData, setLoginGlobalData, checkIfTokenIsValid }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalDataContext;
