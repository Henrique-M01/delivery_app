import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerUser from '../api/registerUser';
import AppDeliveryContext from '../context/AppDeliveryContext';

export default function Register() {
  const { setIsLogged } = useContext(AppDeliveryContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const register = () => {
    registerUser({ name, email, password })
      .then(() => setIsLogged(true))
      .then(() => navigate('/home'));
  };

  return (
    <div>
      <h1>Cadrastre-se</h1>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          register();
        } }
      >
        <label htmlFor="name-input">
          Nome:
          <input
            id="name-input"
            data-testid="common_register__input-name"
            placeholder="Digite seu nome"
            type="text"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email-input">
          Email:
          <input
            id="email-input"
            placeholder="Digite seu email"
            data-testid="common_register__input-email"
            type="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            id="password-input"
            placeholder="Digite sua senha"
            data-testid="common_register__input-password"
            type="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
