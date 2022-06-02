import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ userRole }) {
  return (
    <nav className="flex nav-bar">
      <div className="flex group-1">
        {userRole === 'seller' && (
          <Link to="/customer/products" className="group-1-link">
            Pedidos
          </Link>
        )}
        {userRole === 'admin' && (
          <Link to="/customer/products" className="group-1-link">
            Gerenciar usuários
          </Link>
        )}
      </div>

      <div className="flex group-2">
        <Link to="/customer/products" className="user">Sicrano da Silva</Link>
        <Link to="/login" className="logout">Sair</Link>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  userRole: PropTypes.string.isRequired,
};
