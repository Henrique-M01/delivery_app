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
            type="text"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email-input">
          Email:
          <input
            id="email-input"
            type="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            id="password-input"
            type="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
