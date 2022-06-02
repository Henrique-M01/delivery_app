import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNewUser } from '../../redux/actions';
import fetchLogin from '../../api/fetchLogin';
import AppDeliveryContext from '../../context/AppDeliveryContext';
import decodeToken from '../../utils/decodeToken';

function LoginForm(setUser) {
  const { setIsLogged } = useContext(AppDeliveryContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    fetchLogin(credentials)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setUser(decodeToken(res.token));
      })
      .then(() => setIsLogged(true))
      .then(() => navigate('/produtos'))
      .catch((err) => console.log(err));
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
          onChange={ (e) => handleChange('password', e.target.value) }
          type="password"
          id="password-input"
          placeholder="Digite sua senha"
        />
      </label>

      <button className="btn" type="submit">Login</button>
      <button
        className="btn"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}

mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setNewUser(user)),
});

export default connect()(LoginForm);
