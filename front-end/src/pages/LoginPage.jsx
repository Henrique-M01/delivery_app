import React from 'react';
import LoginForm from '../components/login/LoginForm';
import logo from '../images/logo.svg';
import './login.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <img src={ logo } alt="Logo" />
        <h1>Nosso app de delivery</h1>
        <LoginForm />
      </div>
    </div>
  );
}
