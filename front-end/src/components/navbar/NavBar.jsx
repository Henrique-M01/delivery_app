import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ userRole, userName }) {
  return (
    <nav className="flex nav-bar">
      <div className="flex group-1">
        {userRole === 'seller' && (
          <h1
            className="group-1-link"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Pedidos
          </h1>
        )}
        {userRole === 'administrator' && (
          <h1
            className="group-1-link"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Gerenciar usuários
          </h1>
        )}
      </div>

      <div className="flex group-2">
        <h1
          className="user"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </h1>
        <Link
          to="/login"
          className="logout"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => localStorage.removeItem('user') }
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  userRole: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
