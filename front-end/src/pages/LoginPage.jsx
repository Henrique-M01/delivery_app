import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import logo from '../images/logo.svg';
import '../components/login/login.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) navigate('customer/products');
  })

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
