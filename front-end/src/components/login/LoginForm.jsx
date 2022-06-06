
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNewUser, setToken, setIsLoggedIn } from '../../redux/actions';
import decodeToken from '../../utils/decodeToken';
import fetchLogin from '../../api/fetchLogin';
import validateLogin from '../../helpers/validateLogin';

function LoginForm({ setUser, setTokenState, setIsLogged }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sucssesLogin, setSucssesLogin] = useState(false);
  const [disable, setDisable] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
      const validate = validateLogin({ email, password });
  
      validate ? setDisable(false) : setDisable(true);
  }, [email, password])
   
  useEffect(() => {
    setUser({});
    setTokenState('');
    setIsLogged(false);
  }, [setTokenState, setUser, setIsLogged]);

  const handleChange = (flag, value) => {
    if (flag === 'email') setEmail(value);
    if (flag === 'password') setPassword(value);
  };

  const loginSubmit = () => {
    const credentials = {
      email,
      password,
    };

    const validate = validateLogin({ email, password });

    if (!validate) setSucssesLogin(true);

    fetchLogin(credentials)
      .then((res) => {
        setTokenState(res.token);
        setUser(decodeToken(res.token));
      })
      .then(() => setIsLogged(true))
      .then(() => navigate('/customer/products'))
      .catch(() => setSucssesLogin(true));
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        loginSubmit();
      } }
      className="login-form"
    >
      <label htmlFor="email-input">
        Login
        <input
          value={ email }
          data-testid="common_login__input-email"
          onChange={ (e) => handleChange('email', e.target.value) }
          type="email"
          id="email-input"
          placeholder="Digite seu email"
        />
      </label>

      <label htmlFor="password-input">
        Senha
        <input
          value={ password }
          data-testid="common_login__input-password"
          onChange={ (e) => handleChange('password', e.target.value) }
          type="text"
          id="password-input"
          placeholder="Digite sua senha"
        />
      </label>

      <button
        disabled={ disable }
        className="btn login-btn"
        type="submit"
        data-testid="common_login__button-login"
      >
        Login
      </button>
      <button
        className="btn"
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </button>
      {sucssesLogin
        && (
          <span
            data-testid="common_login__element-invalid-email"
          >
            Email ou senha invalidos
          </span>)}
    </form>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
  setTokenState: PropTypes.func.isRequired,
  setIsLogged: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (state) => dispatch(setNewUser(state)),
  setTokenState: (token) => dispatch(setToken(token)),
  setIsLogged: (state) => dispatch(setIsLoggedIn(state)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
