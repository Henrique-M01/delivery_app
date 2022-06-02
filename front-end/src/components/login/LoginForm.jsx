import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNewUser, setToken } from '../../redux/actions';
import AppDeliveryContext from '../../context/AppDeliveryContext';
import decodeToken from '../../utils/decodeToken';
import fetchLogin from '../../api/fetchLogin';
import validateLogin from '../../helpers/validateLogin';

function LoginForm({ setUser, setTokenState }) {
  const { setIsLogged } = useContext(AppDeliveryContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sucssesLogin, setSucssesLogin] = useState(false);

  const navigate = useNavigate();

  const handleChange = (flag, value) => {
    if (flag === 'email') setEmail(value);
    if (flag === 'password') setPassword(value);
  };

  const loginSubmit = () => {
    const credentials = {
      email,
      password,
    };

    const validate = validateLogin(credentials);

    if (!validate) return setSucssesLogin(true);

    fetchLogin(credentials)
      .then((res) => {
        setTokenState(res.token);
        setUser(decodeToken(res.token));
      })
      .then(() => setIsLogged(true))
      .then(() => navigate('/produtos'))
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
          type="password"
          id="password-input"
          placeholder="Digite sua senha"
        />
      </label>

      <button
        className="btn"
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
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (state) => dispatch(setNewUser(state)),
  setTokenState: (token) => dispatch(setToken(token)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
