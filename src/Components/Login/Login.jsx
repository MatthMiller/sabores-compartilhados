import React from 'react';
import style from './Login.module.css';
import backgroundPattern from '../../images/LoginAndRegister/background-pattern.svg';
import formStyle from '../../Components/Form/Form.module.css';
import IconOrange from '../../images/CommonIcons/IconOrange';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { API_URL } from '../../config';
import {
  checkIfHasLoginData,
  getLoginData,
  setLoginData,
} from '../../utils/localStorage.js';
import { GlobalContext } from '../../Contexts/GlobalDataContext.jsx';

const Login = () => {
  const [loginInputs, setLoginInputs] = React.useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const context = React.useContext(GlobalContext);
  console.log(context);
  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    event.preventDefault();

    const { email, password } = loginInputs;

    if (!email.length || !password.length) {
      setErrorMessage('E-mail e senha são obrigatórios');
      return;
    }

    setIsLoading(true);
    axios
      .post(`${API_URL}/users/login`, loginInputs)
      .then(({ data, status }) => {
        console.log(data, status);
        if (data.message) {
          console.log(data.message);

          setLoginData('email', loginInputs.email);
          setLoginData('token', data.token);
          setLoginData('password', loginInputs.password);

          context.setLoginGlobalData({
            email: getLoginData('email'),
            password: getLoginData('password'),
            token: getLoginData('token'),
            isLogged: '',
          });
        }
        navigate('/');
      })
      .catch((error) => {
        if (error) {
          if (error.response) {
            setErrorMessage(error.response.data.message);
          }
        }
      });
    setIsLoading(false);
  };

  return (
    <>
      <div
        style={{ backgroundImage: `url(${backgroundPattern})` }}
        className={style.bg}
      >
        <div className='g-wrapper'>
          <div className='g-container'>
            <div className={style.container}>
              <form className={style.login}>
                <div className={style.logoContainer}>
                  <IconOrange />
                  <h1 className={style.logo}>sabores</h1>
                </div>

                <div className={style.inputs}>
                  <div className={formStyle.inputContainer}>
                    <label htmlFor='email' className={formStyle.label}>
                      E-mail
                    </label>
                    <input
                      className={formStyle.input}
                      type='text'
                      id='email'
                      name='email'
                      placeholder='Insira seu e-mail'
                      value={loginInputs.email}
                      onInput={({ target }) => {
                        setLoginInputs((previousInputs) => ({
                          ...previousInputs,
                          email: target.value,
                        }));
                      }}
                    />
                  </div>

                  <div className={formStyle.inputContainer}>
                    <label htmlFor='password' className={formStyle.label}>
                      Senha
                    </label>
                    <input
                      className={formStyle.input}
                      type='password'
                      id='password'
                      name='password'
                      placeholder='Insira sua senha'
                      value={loginInputs.password}
                      onInput={({ target }) => {
                        setLoginInputs((previousInputs) => ({
                          ...previousInputs,
                          password: target.value,
                        }));
                      }}
                    />
                  </div>
                  {errorMessage.length ? (
                    <p className={formStyle.errorMessage}>{errorMessage}</p>
                  ) : null}
                </div>

                <div className={formStyle.backToHome}>
                  <Link to={'/'}>Voltar para o início</Link>
                </div>

                <div className={style.buttons}>
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <div
                      onClick={handleLoginClick}
                      className={formStyle.filledButton}
                    >
                      Fazer Login
                    </div>
                  )}
                  <div className={style.divisor}>
                    <div className={style.divisorL}></div>
                    <p className={style.registerText}>Não possui uma conta?</p>
                    <div className={style.divisorR}></div>
                  </div>
                  <Link to={'/registrar'} className={formStyle.ghostButton}>
                    Cadastrar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
