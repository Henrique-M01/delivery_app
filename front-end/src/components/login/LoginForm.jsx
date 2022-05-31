import React from 'react';

export default function LoginForm() {
  return (
    <form className="login-form">
      <label htmlFor="email-input">
        Login
        <input type="email" id="email-input" />
      </label>

      <label htmlFor="password-input">
        Senha
        <input type="password" id="password-input" />
      </label>

      <button type="submit">Login</button>
      <button type="button">Ainda não tenho conta</button>
    </form>
  );
}
