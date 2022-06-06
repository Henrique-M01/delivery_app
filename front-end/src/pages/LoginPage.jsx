import React from 'react';
import LoginForm from '../components/login/LoginForm';
import logo from '../images/logo.svg';
import '../components/login/login.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <img className="embreagados" src={ logo } alt="Logo" />
        <h1>Embreagados</h1>

        <LoginForm />
      </div>
    </div>
  );
}
