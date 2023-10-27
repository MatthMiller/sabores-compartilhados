import React from 'react';
import style from './Login.module.css';
import backgroundPattern from '../../images/LoginAndRegister/background-pattern.svg';
import formStyle from '../../Components/Form/Form.module.css';
import IconOrange from '../../images/CommonIcons/IconOrange';

const Login = () => {
  const [loginData, setLoginData] = React.useState({
    email: '',
    password: '',
  });

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
                    />
                  </div>
                </div>

                <div className={style.buttons}>
                  <button className={formStyle.filledButton}>
                    Fazer Login
                  </button>
                  <div className={style.divisor}>
                    <div className={style.divisorL}></div>
                    <p className={style.registerText}>Não possui uma conta?</p>
                    <div className={style.divisorR}></div>
                  </div>
                  <button className={formStyle.ghostButton}>Cadastrar</button>
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
