import React, { useState } from 'react';
import fetchLogin from '../../api/fetchLogin';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (flag, value) => {
    if (flag === 'email') setEmail(value);
    if (flag === 'password') setPassword(value);
  };

  const loginSubmit = () => {
    const credentials = {
      email,
      password,
    };

    fetchLogin(credentials).then((res) => console.log(res));
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
        />
      </label>

      <label htmlFor="password-input">
        Senha
        <input
          value={ password }
          onChange={ (e) => handleChange('password', e.target.value) }
          type="password"
          id="password-input"
        />
      </label>

      <button type="submit">Login</button>
      <button type="button">Ainda não tenho conta</button>
    </form>
  );
}
